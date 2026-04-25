interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ title, description, index }: ServiceCardProps) {
  return (
    <div
      className="group bg-surface rounded-xl p-8 hover:bg-accent transition-colors duration-300"
      data-aos="fade-up"
      data-aos-delay={index * 80}
      data-aos-duration="800"
    >
      <span className="text-xs font-semibold tracking-widest text-muted group-hover:text-white/70 transition-colors duration-300 uppercase">
        0{index + 1}
      </span>
      <h3 className="mt-3 text-xl font-semibold text-primary group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
