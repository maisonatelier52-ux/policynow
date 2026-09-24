import PolicyPage from "../../components/PolicyPage";

const data = {
  title: "Terms & Conditions",
  intro:
    "By accessing and using PolicyNow, you agree to these Terms & Conditions. These terms are intended to explain how our content may be used, the responsibilities of readers, and the limitations that apply to the information published on our website.",
  sections: [
    {
      heading: "Use of Content",
      paragraphs: [
        "All original content published by PolicyNow, including articles, text, graphics, images, and other editorial materials, is protected by applicable copyright and intellectual property laws.",
        "Readers may share links to our content and quote limited excerpts with appropriate attribution. Reproduction, redistribution, or republication of full articles without prior written permission is prohibited.",
        "For permissions, licensing, or republication inquiries, contact us below.",
      ],
    },
    {
      heading: "Accuracy and Updates",
      paragraphs: [
        "We strive to ensure that all published information is accurate and current at the time of publication. However, news and factual circumstances may change over time. Articles may be updated, revised, or corrected as new information becomes available.",
        "Corrections are handled transparently in accordance with our Corrections Policy.",
      ],
    },
    {
      heading: "Opinion and Analysis",
      paragraphs: [
        "Opinion, commentary, and analysis pieces are clearly identified and reflect the views of their authors. Such content should not be interpreted as representing the official position of PolicyNow unless explicitly stated.",
      ],
    },
    {
      heading: "External Links",
      paragraphs: [
        "Our content may include links to third-party websites, documents, or resources for reference and informational purposes. PolicyNow does not control and is not responsible for the content, availability, accuracy, or privacy practices of external sites.",
      ],
    },
    {
      heading: "Limitation of Liability",
      paragraphs: [
        "Content published by PolicyNow is provided for general informational and educational purposes only. Nothing on this website should be interpreted as legal, medical, financial, or professional advice.",
        "Readers should seek qualified professional guidance before making decisions based on information contained in our reporting.",
      ],
    },
    {
      heading: "Reader Contributions",
      paragraphs: [
        "Where comments, submissions, or other forms of reader participation are permitted, users are expected to engage respectfully and lawfully.",
        "PolicyNow reserves the right to remove content that is unlawful, abusive, defamatory, misleading, spam-related, or otherwise inconsistent with community standards.",
      ],
    },
    {
      heading: "Changes to These Terms",
      paragraphs: [
        "These Terms & Conditions may be revised periodically to reflect changes in our operations, policies, legal obligations, or editorial practices. Updated versions will be published on this page with a revised effective date.",
      ],
    },
  ],
  email: "editorial@policynow.org",
  updated: "Last Updated: March 31, 2026",
};

export default function TermsPage() {
  return <PolicyPage data={data} />;
}
