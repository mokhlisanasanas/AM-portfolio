import Image from "next/image";
import { Heading } from "@/shared/components/ui";
import { MotionReveal } from "@/shared/motion";
import type { ProjectScreenshot } from "../data/types";

interface ProjectScreenshotsProps {
  readonly screenshots?: readonly ProjectScreenshot[];
  readonly note?: string;
  readonly number?: string;
}

function getScreenshotCaption(screenshot: ProjectScreenshot): string | undefined {
  if (screenshot.type === "product-reference") {
    return screenshot.caption
      ? `Live product reference — ${screenshot.caption}`
      : "Live product reference";
  }

  return screenshot.caption;
}

export function ProjectScreenshots({
  screenshots,
  note,
  number = "06",
}: ProjectScreenshotsProps) {
  if (screenshots === undefined || screenshots.length === 0) {
    return null;
  }

  return (
    <MotionReveal duration={0.55}>
      <section
        aria-labelledby="project-screenshots"
        className="grid gap-5 border-t border-[var(--component-divider-color)] pt-8 md:grid-cols-12 md:gap-8 lg:col-span-12"
      >
        <p className="text-[length:var(--font-size-xs)] font-[var(--typography-weight-emphasis)] text-[var(--color-text-muted)]">
          {number}
        </p>
        <div className="space-y-6 md:col-span-11">
          <div className="space-y-4">
            <Heading id="project-screenshots" level={2} size="section">
              Product Reference
            </Heading>
            {note ? (
              <p className="max-w-3xl text-[length:var(--typography-size-body)] leading-[var(--line-height-relaxed)] text-[var(--color-text-secondary)]">
                {note}
              </p>
            ) : null}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {screenshots.map((screenshot) => {
              const caption = getScreenshotCaption(screenshot);

              return (
                <figure key={screenshot.id} className="space-y-3">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={screenshot.width}
                    height={screenshot.height}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    loading="lazy"
                    className={[
                      "h-auto w-full rounded-[var(--component-card-radius)]",
                      "border border-[var(--component-card-border)]",
                    ].join(" ")}
                  />
                  {caption ? (
                    <figcaption className="text-[length:var(--typography-size-body-sm)] leading-[var(--line-height-relaxed)] text-[var(--color-text-muted)]">
                      {caption}
                    </figcaption>
                  ) : null}
                </figure>
              );
            })}
          </div>
        </div>
      </section>
    </MotionReveal>
  );
}
