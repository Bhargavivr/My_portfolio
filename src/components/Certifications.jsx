import React from "react";

const certs = [
  {
    name: "Data Analytics",
    provider: "Deloitte",
    logo: "deloitte.png",
    link: "https://drive.google.com/file/d/1vGP0F2q0iER1JYTnclJy-0Oa9jJyrtbQ/view",
  },
  {
    name: "Docker & Kubernetes",
    provider: "Udemy",
    logo: "udemy.png",
    link: "https://drive.google.com/file/d/1nGS4-srZdDlpMJ6TtxPZF5vClxC2Ft2L/view",
  },
  {
    name: "Vultr Cloud Innovate Hackathon.",
    provider: "Geeksforgeeks",
    logo: "gfg.png",
    link: "https://drive.google.com/file/d/1FqWtMMDOgJ8pmJTOrIyfYYJ0q8lYb0ad/view",
  },
  {
    name: "Cloud Solutions",
    provider: "Hack2skill",
    logo: "hack2skill.png",
    link: "https://drive.google.com/file/d/11UdNcLVH_jfp1MwaH700sA_nquRwS1ZY/view",
  },
];

const Certifications = () => {
  return (
    <section className="certs-section" id="certifications">
      <h2 className="certs-heading">Certifications</h2>

      <div className="certs-grid">
        {certs.map((c, idx) => (
          <div key={idx} className="cert-card">
            <div className="cert-top">
              <img
                src={c.logo}
                alt={`${c.provider} logo`}
                className="cert-logo"
              />
              <div className="cert-meta">
                <p className="cert-name">{c.name}</p>
                <p className="cert-provider">{c.provider}</p>
              </div>
            </div>

            <div className="cert-actions">
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="cert-btn"
                aria-label={`View ${c.name} certificate`}
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
