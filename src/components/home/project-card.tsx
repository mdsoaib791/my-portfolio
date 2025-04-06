import React from "react";

interface ProjectCardProps {
  className?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  overlay?: React.ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  className = "",
  icon,
  title,
  description,
  buttonText,
  buttonHref,
  overlay,
}) => {
  return (
    <div className={`group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white dark:bg-black transform-gpu shadow-xl ${className}`}>
      {overlay && <div className="size-full">{overlay}</div>}

      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <div className="size-12 text-neutral-700 group-hover:scale-75 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="max-w-lg text-neutral-400">{title}</h3>
        <p className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">{description}</p>
      </div>

      {buttonText && buttonHref && (
        <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <a href={buttonHref} className="pointer-events-auto inline-flex items-center gap-2 h-8 rounded-md px-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition">
            {buttonText}
            <svg className="size-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10" />
    </div>
  );
};
