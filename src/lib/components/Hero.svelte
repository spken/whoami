<script lang="ts">
  import * as HoverCard from "./ui/hover-card";
  import * as Avatar from "./ui/avatar";
  import CalendarDaysIcon from "@lucide/svelte/icons/calendar-days";
  import GithubIcon from "@lucide/svelte/icons/github";
  import LinkedinIcon from "@lucide/svelte/icons/linkedin";
  import MailIcon from "@lucide/svelte/icons/mail";
  import DownloadIcon from "@lucide/svelte/icons/download";
  import Section from "./Section.svelte";
  import Timeline from "./Timeline.svelte";
  import TimelineItem from "./TimelineItem.svelte";
  import ubsLogo from "$lib/assets/ubs-logo.jpg";
  import sayntLogo from "$lib/assets/saynt-logo.jpg";
  import bzzLogo from "$lib/assets/bzz-logo.jpg";
  import swissSkillsLogo from "$lib/assets/swiss-skills-2025-logo.jpg";
  import swissSkillsAmbassadorLogo from "$lib/assets/swiss-skills-logo.jpg";
</script>

<section class="mt-12 mb-12">
  <h1 class="text-2xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight">
    <span class="text-ctp-subtext0">whoami:</span>
    <span class="accent">Matias Varela</span>
  </h1>

  <div class="max-w-2xl space-y-8">
    <p class="text-lg text-ctp-text leading-relaxed font-medium">
      AI Engineer @ <HoverCard.Root>
        <HoverCard.Trigger
          href="https://www.ubs.com"
          target="_blank"
          rel="noopener noreferrer"
          class="accent underline"
        >UBS</HoverCard.Trigger><HoverCard.Content class="w-80">
          <div class="flex justify-between space-x-4">
            <Avatar.Root>
              <Avatar.Image src={ubsLogo} />
              <Avatar.Fallback>UBS</Avatar.Fallback>
            </Avatar.Root>
            <div class="space-y-1">
              <h4 class="accent text-sm font-semibold">UBS</h4>
              <p class="text-sm">
                AI Engineer @ UBS. Working in Joint AI Execution and Enablement, with
                background in Cybersecurity Architecture and Innovation.
              </p>
              <div class="flex items-center pt-2">
                <CalendarDaysIcon class="me-2 size-4 opacity-70" />
                <span class="text-muted-foreground text-xs">
                  August 2026 - Present
                </span>
              </div>
            </div>
          </div>
        </HoverCard.Content></HoverCard.Root>, where I build AI solutions for security and tech
      services. Mostly Python, React, and fighting my agent.
    </p>

    <div class="flex items-center gap-4 pt-4">
      <a
        href="https://github.com/spken"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center gap-2 transition-colors"
        title="GitHub"
      >
        <GithubIcon
          class="size-5 text-ctp-subtext0 group-hover:accent transition-colors"
        />
        <span
          class="text-sm font-mono text-ctp-subtext0 group-hover:accent transition-colors"
          >github</span
        >
      </a>

      <a
        href="https://www.linkedin.com/in/matias-varela-cousillas"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center gap-2 transition-colors"
        title="LinkedIn"
      >
        <LinkedinIcon
          class="size-5 text-ctp-subtext0 group-hover:accent transition-colors"
        />
        <span
          class="text-sm font-mono text-ctp-subtext0 group-hover:accent transition-colors"
          >linkedin</span
        >
      </a>

      <a
        href="mailto:varematias11@gmail.com"
        class="group flex items-center gap-2 transition-colors"
        title="Email"
      >
        <MailIcon
          class="size-5 text-ctp-subtext0 group-hover:accent transition-colors"
        />
        <span
          class="text-sm font-mono text-ctp-subtext0 group-hover:accent transition-colors"
          >email</span
        >
      </a>

      <a
        href="cv_matias-varela-cousillas_2026.pdf"
        download
        class="group flex items-center gap-2 transition-colors"
        title="Download CV"
      >
        <DownloadIcon
          class="size-5 text-ctp-subtext0 group-hover:accent transition-colors"
        />
        <span
          class="text-sm font-mono text-ctp-subtext0 group-hover:accent transition-colors"
          >cv</span
        >
      </a>
    </div>

    <div class="pt-8 space-y-12">
      <Section title="Experience">
        <Timeline>
          <TimelineItem
            name="UBS - AI Engineer"
            logo={ubsLogo}
            fallback="UBS"
            description="Joint AI Execution and Enablement — AI-driven vulnerability management and SOC incident-handling systems."
            timePeriod="August 2026 - Present"
            link="https://www.ubs.com"
            skills={[
              "Python",
              "LangGraph",
              "Autogen",
              "AI/ML",
              "Cybersecurity",
              "DevSecOps",
              "Threat Modeling",
              "TypeScript",
              "React",
              "PostgreSQL",
            ]}
          />

          <TimelineItem
            name="UBS - Apprenticeship"
            logo={ubsLogo}
            fallback="UBS"
            description="Four-year software engineering apprenticeship, spent across Cybersecurity Architecture &amp; Innovation and AI Execution &amp; Enablement."
            timePeriod="August 2022 - July 2026"
            link="https://www.ubs.com"
            past
            skills={[
              "Python",
              "LangGraph",
              "Autogen",
              "AI/ML",
              "Cybersecurity",
              "DevSecOps",
              "Threat Modeling",
              "TypeScript",
              "React",
              "PostgreSQL",
            ]}
          />

          <TimelineItem
            name="SAYNT"
            logo={sayntLogo}
            fallback="SA"
            description="Full-stack mobile app for collectors investing in watches and handbags, with data- and AI-driven price insights."
            timePeriod="October 2025 - November 2025"
            link="https://www.linkedin.com/feed/update/urn:li:activity:7394429736325885954/"
            past
            skills={["React Native", "TypeScript", "Expo", "Supabase", "AI/ML"]}
          />

          <TimelineItem
            name="SwissSkills 2025"
            logo={swissSkillsLogo}
            fallback="SS"
            description="5th place at the Swiss National Vocational Championships."
            timePeriod="September 2025"
            link="https://swiss-skills2025.ch/de/wettbewerb/31541/it-software-solutions-for-business"
            past
            skills={["Electron", "MySQL", "Problem Solving", "Time Management"]}
          />
        </Timeline>
      </Section>

      <Section title="Honors & Awards">
        <Timeline>
    <TimelineItem
      name="Federal VET Diploma, Software Engineering"
      logo={bzzLogo}
      fallback="BZZ"
      description="Honored as the best IPA in Switzerland and the best software engineering graduate in the Canton of Zurich."
      timePeriod="August 2022 - July 2026"
      skills={[
        "IPA: 6.0",
        "Overall: 5.8",
      ]}
    />

    <TimelineItem
      name="Federal Vocational Baccalaureate, Economics & Business"
      logo={bzzLogo}
      fallback="BZZ"
      description="Recognized as the best graduate of the year for achieving the highest overall grade."
      timePeriod="August 2022 - July 2026"
      skills={[
        "Overall: 5.6",
      ]}
    />
        </Timeline>
      </Section>

      <Section title="Extracurriculars">
        <Timeline>
          <TimelineItem
            name="Ambassador"
            logo={swissSkillsAmbassadorLogo}
            fallback="SS"
            description="Representing my profession at SwissSkills events, making the case for vocational education to people deciding what to do next."
            timePeriod="December 2025 - Present"
            link="https://www.swiss-skills.ch"
            skills={[
              "Public Speaking",
              "Advocacy",
              "Mentorship",
              "Event Participation",
              "Professional Representation",
            ]}
          />

          <TimelineItem
            name="Committee Member - CoaA"
            logo={ubsLogo}
            fallback="CM"
            description="Ran events for the UBS Community of Active Apprentices and represented apprentice interests to the business."
            timePeriod="August 2024 - July 2026"
            past
            skills={[
              "Leadership",
              "Event Planning",
              "Communication",
              "Networking",
              "Organization",
            ]}
          />

          <TimelineItem
            name="Cohort Representative"
            logo={ubsLogo}
            fallback="CR"
            description="Main point of contact between apprentices and training supervisors, communicating feedback and managing organizational matters for my apprenticeship cohort."
            timePeriod="August 2022 - July 2026"
            past
            skills={["Leadership", "Communication", "Organization", "Advocacy"]}
          />
        </Timeline>
      </Section>
    </div>
  </div>
</section>
