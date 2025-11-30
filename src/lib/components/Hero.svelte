<script lang="ts">
  import CalendarDaysIcon from "@lucide/svelte/icons/calendar-days";
  import * as Avatar from "./ui/avatar";
  import * as HoverCard from "./ui/hover-card";
  import ubsLogo from "$lib/assets/ubs-logo.jpg";
</script>

<section class="mb-12">
  <h1 class="text-2xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight">
    <span class="text-ctp-subtext0">whoami:</span>
    <span class="accent">Matias Varela</span>
  </h1>

  <div class="max-w-2xl space-y-4">
    <p class="text-base text-ctp-text leading-relaxed font-medium">
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
  </div>
</section>
