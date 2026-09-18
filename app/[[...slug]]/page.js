import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

function normalizeHtml(html) {
  return html
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n');
}

function fixAssetPaths(html) {
  return html
    .replace(
      /(src|href|poster|data-src)=("|')\/(?!site\/|\/|https?:|mailto:|tel:|#)([^"']+)(\2)/gi,
      '$1=$2/site/$3$4'
    )
    .replace(
      /(src|href|poster|data-src)=("|')(?!\/|https?:|mailto:|tel:|#|data:|javascript:)([^"']+)(\2)/gi,
      (match, attr, quote, value, endQuote) => {
        if (
          /^(image|images|img|css|js|fonts|assets|favicon)\//i.test(value)
        ) {
          return `${attr}=${quote}/site/${value}${endQuote}`;
        }

        return match;
      }
    )
    .replace(
      /url\((['"]?)(?!\/|https?:|data:)([^)'"\s]+)\1\)/gi,
      (match, quote, value) => {
        if (/^(image|images|img|fonts|assets)\//i.test(value)) {
          return `url(${quote}/site/${value}${quote})`;
        }

        return match;
      }
    );
}

function extractHeadStyles(html) {
  const headMatch = html.match(
    /<head[^>]*>([\s\S]*?)<\/head>/i
  );

  if (!headMatch) {
    return '';
  }

  return [
    ...headMatch[1].matchAll(
      /<style\b[^>]*>([\s\S]*?)<\/style>/gi
    ),
  ]
    .map((match) => match[1])
    .join('\n');
}

function getBodyOnly(html) {
  const bodyMatch = html.match(
    /<body[^>]*>([\s\S]*?)<\/body>/i
  );

  if (bodyMatch) {
    return bodyMatch[1];
  }

  return html
    .replace(/<!doctype[^>]*>/gi, '')
    .replace(/<html[^>]*>|<\/html>/gi, '')
    .replace(
      /<head[^>]*>[\s\S]*?<\/head>/gi,
      ''
    );
}

export default async function Page({ params }) {
  const { slug = [] } = await params;

  const relativePath = slug.length
    ? slug.join('/')
    : 'index.html';

  const filePath = path.join(
    process.cwd(),
    'public',
    'site',
    relativePath.endsWith('.html')
      ? relativePath
      : `${relativePath}.html`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = normalizeHtml(
    fs.readFileSync(filePath, 'utf8')
  );

  const styles = extractHeadStyles(source);

  const bodyHtml = fixAssetPaths(
    getBodyOnly(source).replace(
      /<script\b[^>]*>[\s\S]*?<\/script>/gi,
      ''
    )
  );

  return (
    <>
      {styles ? (
        <style
          dangerouslySetInnerHTML={{
            __html: styles,
          }}
        />
      ) : null}

      <div suppressHydrationWarning>
        <div
          dangerouslySetInnerHTML={{
            __html: bodyHtml,
          }}
        />
      </div>
    </>
  );
}