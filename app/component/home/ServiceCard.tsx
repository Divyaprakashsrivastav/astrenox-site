import Link from "next/link";

export type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="service-card" data-cursor-hover>
      <div className="service-card-copy">
        <div className="service-card-row">
          <h3 className="service-card-title">{title}</h3>
          <span className="service-card-arrow" aria-hidden>
            →
          </span>
        </div>
        <p className="service-card-description">{description}</p>
      </div>
    </Link>
  );
}
