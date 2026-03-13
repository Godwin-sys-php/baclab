import Link from "next/link";

interface ActualiteCardProps {
  badge?: string;
  title: string;
  date: string;
  description: string;
  href: string;
  buttonLabel: string;
  featured?: boolean;
}

export default function ActualiteCard({
  badge,
  title,
  date,
  description,
  href,
  buttonLabel,
  featured = false,
}: ActualiteCardProps) {
  return (
    <div
      className={`rounded-2xl border p-6 sm:p-8 transition-all duration-300 hover:shadow-lg ${
        featured
          ? "border-red-primary/20 bg-white shadow-md"
          : "border-gray-200 bg-white"
      }`}
    >
      {badge && (
        <span className="inline-block rounded-full bg-red-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-red-primary uppercase mb-3">
          {badge}
        </span>
      )}
      <h3 className="font-display text-xl font-bold text-foreground mb-1">
        {title}
      </h3>
      <p className="text-sm text-foreground/50 mb-3">{date}</p>
      <p className="text-foreground/70 leading-relaxed mb-5">{description}</p>
      <Link
        href={href}
        className="inline-block rounded-lg bg-red-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}
