import PolicyPage from "../../components/PolicyPage";

const data = {
  title: "Privacy Policy",
  intro:
    "PolicyNow values reader trust. We collect only limited information necessary to operate our newsroom, communicate with readers, and improve our journalism. This policy explains what we collect, why we collect it, and how we protect it.",
  sections: [
    {
      heading: "Information We Collect",
      paragraphs: [
        "When you visit our website, basic technical data such as pages viewed, device type, and browser information may be collected automatically. This information helps us understand readership patterns and improve site performance.",
        "If you contact us directly — for tips, corrections, or inquiries — we collect only the information you choose to provide, such as your name and email address.",
        "We do not collect unnecessary personal data, and we do not sell or trade user information.",
      ],
    },
    {
      heading: "How Information Is Used",
      list: [
        "To keep the website operating smoothly and securely.",
        "To understand which stories resonate with readers.",
        "To respond to messages, tips, or correction requests.",
        "To provide updates when readers request them.",
      ],
      paragraphs: ["We do not use personal data for advertising sales, profiling, or promotional targeting."],
    },
    {
      heading: "Cookies and Analytics",
      paragraphs: [
        "We use cookies and analytics tools to understand how readers interact with our content. You may disable cookies in your browser without affecting access to our reporting.",
        "Third-party analytics services may process anonymized data under their own privacy policies.",
      ],
    },
    {
      heading: "Your Rights and Choices",
      paragraphs: [
        "Depending on your jurisdiction, you may have rights to access, correct, or request deletion of personal data. Requests can be submitted using the contact below.",
      ],
    },
    {
      heading: "Data Protection",
      paragraphs: [
        "We take reasonable technical and organizational measures to protect information from unauthorized access. Because we limit the data we collect, we also limit exposure and risk.",
      ],
    },
  ],
  email: "editorial@policynow.org",
  updated: "Last Updated: May 21, 2026",
};

export default function PrivacyPolicyPage() {
  return <PolicyPage data={data} />;
}
