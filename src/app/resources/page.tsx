import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DATA } from "@/data/resume";
import { DownloadIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Resources",
  description: "Downloads and contact resources for Amit Kumar.",
};

const BLUR_FADE_DELAY = 0.04;

const RESOURCES = [
  {
    title: "Resume (PDF)",
    description:
      "Full-stack developer resume — skills, experience, projects, and education.",
    file: "/downloads/Amit-Kumar-Resume.pdf",
    filename: "Amit-Kumar-Resume.pdf",
    type: "PDF",
    updated: "2026-06-26",
  },
] as const;

export default function ResourcesPage() {
  return (
    <section className="space-y-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="space-y-2">
          <h1 className="font-medium text-2xl tracking-tighter">Resources</h1>
          <p className="text-sm text-muted-foreground max-w-lg">
            Downloads and contact details. For work inquiries, reach out at{" "}
            <Link
              href={`mailto:${DATA.contact.workEmail}`}
              className="text-blue-500 hover:underline"
            >
              {DATA.contact.workEmail}
            </Link>
            .
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <MailIcon className="size-4" />
              Contact
            </CardTitle>
            <CardDescription>
              Portfolio and project inquiries
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              <span className="text-muted-foreground">Work email: </span>
              <Link
                href={`mailto:${DATA.contact.workEmail}`}
                className="text-blue-500 hover:underline"
              >
                {DATA.contact.workEmail}
              </Link>
            </p>
            <p>
              <span className="text-muted-foreground">Personal: </span>
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="text-blue-500 hover:underline"
              >
                {DATA.contact.email}
              </Link>
            </p>
          </CardContent>
        </Card>
      </BlurFade>

      <div className="space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Downloads
          </h2>
        </BlurFade>
        {RESOURCES.map((item, id) => (
          <BlurFade key={item.title} delay={BLUR_FADE_DELAY * 4 + id * 0.05}>
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {item.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{item.type}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  Updated {item.updated}
                </p>
                <Button asChild size="sm" variant="default">
                  <a href={item.file} download={item.filename}>
                    <DownloadIcon className="size-4 mr-2" />
                    Download
                  </a>
                </Button>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
