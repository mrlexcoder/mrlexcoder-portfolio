from fpdf import FPDF
import os

OUT = os.path.join(
    os.path.dirname(__file__),
    "..",
    "public",
    "downloads",
    "Amit-Kumar-Resume.pdf",
)


class ResumePDF(FPDF):
    def section_title(self, title: str) -> None:
        self.set_font("Helvetica", "B", 11)
        self.set_text_color(30, 30, 30)
        self.cell(0, 8, title.upper(), new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(180, 180, 180)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.ln(3)

    def body_text(self, text: str) -> None:
        self.set_font("Helvetica", "", 9)
        self.set_text_color(50, 50, 50)
        self.multi_cell(0, 4.5, text)
        self.ln(2)


pdf = ResumePDF()
pdf.set_margins(18, 18, 18)
pdf.add_page()
pdf.set_font("Helvetica", "B", 22)
pdf.cell(0, 10, "Amit Kumar", new_x="LMARGIN", new_y="NEXT", align="C")
pdf.set_font("Helvetica", "B", 12)
pdf.cell(0, 7, "Full-Stack Developer", new_x="LMARGIN", new_y="NEXT", align="C")
pdf.set_font("Helvetica", "", 9)
pdf.cell(
    0,
    5,
    "+91 8628882486  |  amitsandhu6424@gmail.com  |  dev@himachalgovt.com",
    new_x="LMARGIN",
    new_y="NEXT",
    align="C",
)
pdf.cell(
    0,
    5,
    "linkedin.com/in/amit-sandhu--",
    new_x="LMARGIN",
    new_y="NEXT",
    align="C",
)
pdf.ln(6)

pdf.section_title("Summary")
pdf.body_text(
    "Full-Stack Developer with 2+ years of experience building web and mobile products for clients. "
    "Skilled in JavaScript, React Native, Next.js, PHP, Node.js, MongoDB, Firebase, and Linux server deployment. "
    "Uses modern AI tools (Cursor, Claude) for faster development, debugging, and delivery."
)

pdf.section_title("Technical Skills")
pdf.body_text(
    "Languages & Frameworks: HTML, CSS, JavaScript, PHP, React Native, Next.js, Laravel, Expo, SEO\n"
    "Backend & Databases: REST APIs, Node.js, Express, MongoDB, Firebase, Oracle, MySQL\n"
    "Cloud & DevOps: AWS EC2, Linux (Ubuntu), SSH, WHM/cPanel, Apache, Nginx\n"
    "AI-Assisted Development: Cursor IDE, Claude AI (1+ year)\n"
    "Tools: Git, Postman, VS Code, Android Studio, WordPress"
)

pdf.section_title("Experience")
pdf.set_font("Helvetica", "B", 10)
pdf.cell(
    0,
    5,
    "Web and App Developer - Own Info Tech Pvt. Ltd., Anandpur Sahib",
    new_x="LMARGIN",
    new_y="NEXT",
)
pdf.set_font("Helvetica", "I", 9)
pdf.cell(0, 4, "Aug 2024 - Present", new_x="LMARGIN", new_y="NEXT")
pdf.body_text(
    "- Build and maintain client websites and mobile apps based on project requirements.\n"
    "- Work on WordPress, PHP, Laravel, and Next.js with REST API and database integrations.\n"
    "- Use Cursor and Claude AI daily to build features faster and fix bugs.\n"
    "- Deploy on Linux servers; improve speed, security, and data handling."
)

pdf.set_font("Helvetica", "B", 10)
pdf.cell(
    0,
    5,
    "Junior Linux Administrator - KV IT Solutions Pvt. Ltd.",
    new_x="LMARGIN",
    new_y="NEXT",
)
pdf.set_font("Helvetica", "I", 9)
pdf.cell(0, 4, "Jul 2023 - Aug 2024", new_x="LMARGIN", new_y="NEXT")
pdf.body_text(
    "- Installed Ubuntu servers, Oracle databases, and SSH access.\n"
    "- Managed Apache, Nginx, WHM/cPanel hosting for client websites.\n"
    "- Configured domains, DNS, SMTP, firewalls, and server security."
)

pdf.section_title("Projects")
pdf.set_font("Helvetica", "B", 10)
pdf.cell(0, 5, "HimachalGovt.com - WordPress, PHP, JavaScript, SEO", new_x="LMARGIN", new_y="NEXT")
pdf.body_text(
    "Public platform for Himachal Pradesh jobs, news, and yojana. "
    "Linux VPS with Google Analytics, Search Console, and AdSense."
)

pdf.set_font("Helvetica", "B", 10)
pdf.cell(
    0,
    5,
    "HimachalGovt Android App - React Native, Firebase (Play Store testing)",
    new_x="LMARGIN",
    new_y="NEXT",
)
pdf.body_text("Mobile app for government jobs and news updates on Android.")

pdf.set_font("Helvetica", "B", 10)
pdf.cell(
    0,
    5,
    "Titan Drilling Mobile App - React Native, Node.js, MongoDB, Firebase",
    new_x="LMARGIN",
    new_y="NEXT",
)
pdf.body_text("Field operations app with offline sync, PDF reports, and role-based access.")

pdf.section_title("Education")
pdf.set_font("Helvetica", "B", 10)
pdf.cell(
    0,
    5,
    "B.Tech Computer Science Engineering - I.K. Gujral PTU (2018-2022, CGPA 7.5)",
    new_x="LMARGIN",
    new_y="NEXT",
)

pdf.section_title("Achievements")
pdf.body_text(
    "Employee of the Year at Own Info Tech Pvt. Ltd. (July 2025) "
    "for outstanding performance and dedication."
)

os.makedirs(os.path.dirname(OUT), exist_ok=True)
pdf.output(OUT)
print(OUT)
