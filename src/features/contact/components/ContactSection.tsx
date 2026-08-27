import {
  BackgroundBoundary,
  BackgroundSurface,
} from "@/shared/components/background";
import { Container } from "@/shared/components/Container";
import { MotionStagger } from "@/shared/motion";
import { Section } from "@/shared/components/Section";
import { SectionHeader } from "@/shared/components/ui";
import { contactContent } from "../data/contactLinks";
import { ContactForm } from "./ContactForm";
import { ContactLinkList } from "./ContactLinkList";

const contactTitleId = "contact-title";

export function ContactSection() {
  return (
    <BackgroundSurface variant="subtle">
      <BackgroundBoundary position="top" />
      <Section id="contact" aria-labelledby={contactTitleId}>
        <Container>
          <MotionStagger
            className={[
              "grid gap-10 lg:grid-cols-12 lg:gap-12",
              "lg:[&>*:first-child]:col-span-7",
              "lg:[&>*:last-child]:col-span-4 lg:[&>*:last-child]:col-start-9 lg:[&>*:last-child]:pt-[var(--space-2)]",
            ].join(" ")}
            duration={0.6}
            staggerDelay={0.1}
          >
            <div className="space-y-8">
              <SectionHeader
                id={contactTitleId}
                eyebrow={contactContent.eyebrow}
                title={contactContent.title}
                description={contactContent.description}
              />

              <ContactLinkList links={contactContent.links} />
            </div>

            <div>
              <ContactForm />
            </div>
          </MotionStagger>
        </Container>
      </Section>
    </BackgroundSurface>
  );
}
