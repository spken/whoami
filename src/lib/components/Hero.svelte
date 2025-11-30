<script lang="ts">
  import * as HoverCard from "./ui/hover-card";
  import * as Avatar from "./ui/avatar";
  import CalendarDaysIcon from "@lucide/svelte/icons/calendar-days";
  import BriefcaseIcon from "@lucide/svelte/icons/briefcase";
  import SparklesIcon from "@lucide/svelte/icons/sparkles";
  import Timeline from "./Timeline.svelte";
  import TimelineItem from "./TimelineItem.svelte";
  import ubsLogo from "$lib/assets/ubs-logo.jpg";
  import sayntLogo from "$lib/assets/saynt-logo.jpg";
  import swissSkillsLogo from "$lib/assets/swiss-skills-2025-logo.jpg";
</script>

<section class="mt-12 mb-12">
  <h1 class="text-2xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight">
    <span class="text-ctp-subtext0">whoami:</span>
    <span class="accent">Matias Varela</span>
  </h1>

  <div class="max-w-2xl space-y-8">
    <p class="text-lg text-ctp-text leading-relaxed font-medium">
      I'm currently working as a Junior SWE @
      <HoverCard.Root>
        <HoverCard.Trigger
          href="https://www.ubs.com"
          target="_blank"
          rel="noopener noreferrer"
          class="accent underline"
        >
          UBS
        </HoverCard.Trigger>
        <HoverCard.Content class="w-80">
          <div class="flex justify-between space-x-4">
            <Avatar.Root>
              <Avatar.Image src={ubsLogo} />
              <Avatar.Fallback>UBS</Avatar.Fallback>
            </Avatar.Root>
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">UBS</h4>
              <p class="text-sm">
                Junior SWE @ UBS. Working on AI Execution and Enablement, with
                background in Cybersecurity Architecture and Innovation.
              </p>
              <div class="flex items-center pt-2">
                <CalendarDaysIcon class="me-2 size-4 opacity-70" />
                <span class="text-muted-foreground text-xs">
                  August 2022 - Present
                </span>
              </div>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>. Specializing in AI execution and enablement, I've had
      the opportunity to work on numerous projects including AI-driven
      vulnerability management systems using Autogen and LangGraph, SOC incident
      handling workflows, and more. Being able to contribute to software that
      protects enterprises at scale is what strengthens my drive to keep
      building, and learning.
    </p>

    <div class="pt-6 space-y-8">
      <div>
        <h2
          class="text-lg font-semibold mb-6 text-ctp-subtext0 flex items-center gap-2"
        >
          <BriefcaseIcon class="size-5 accent" />
          Experience
        </h2>
        <Timeline>
          <TimelineItem
            name="UBS"
            logo={ubsLogo}
            fallback="UBS"
            description="Junior SWE @ UBS. Working on AI Execution and Enablement, with background in Cybersecurity Architecture and Innovation."
            timePeriod="August 2022 - Present"
            link="https://www.ubs.com"
          />

          <TimelineItem
            name="SAYNT"
            logo={sayntLogo}
            fallback="SA"
            description="Built a full-stack mobile application that helps collectors discover and invest in luxury goods (watches & handbags) with data-, and AI-driven insights."
            timePeriod="October 2025 - November 2025"
            link="https://www.linkedin.com/feed/update/urn:li:activity:7394429736325885954/"
            past
          />

          <TimelineItem
            name="SwissSkills"
            logo={swissSkillsLogo}
            fallback="SS"
            description="5th place at the Swiss National Vocational Championships | SwissSkills 2025"
            timePeriod="September 2025"
            link="https://swiss-skills2025.ch/de/wettbewerb/31541/it-software-solutions-for-business"
            past
          />
        </Timeline>
      </div>

      <div class="pt-6">
        <h2
          class="text-lg font-semibold mb-6 text-ctp-subtext0 flex items-center gap-2"
        >
          <SparklesIcon class="size-5 accent" />
          Extracurriculars
        </h2>
        <Timeline>
          <TimelineItem
            name="Committee Member - CoaA"
            logo={ubsLogo}
            fallback="CM"
            description="Committee member of UBS Community of Active Apprentices (CoaA), organizing events, fostering peer networking, and representing apprentice interests to strengthen connections across the company."
            timePeriod="August 2024 - Present"
          />

          <TimelineItem
            name="Class Representative"
            logo={ubsLogo}
            fallback="CR"
            description="Main point of contact between apprentices and training supervisors, communicating feedback and managing organizational matters for my apprenticeship class."
            timePeriod="August 2022 - Present"
          />
        </Timeline>
      </div>
    </div>
  </div>
</section>
