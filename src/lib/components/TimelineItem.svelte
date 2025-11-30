<script lang="ts">
  import * as Avatar from "./ui/avatar";
  import * as HoverCard from "./ui/hover-card";
  import CalendarDaysIcon from "@lucide/svelte/icons/calendar-days";

  interface Props {
    name: string;
    logo?: string;
    fallback: string;
    description: string;
    timePeriod: string;
    link?: string;
    past?: boolean;
  }

  let {
    name,
    logo,
    fallback,
    description,
    timePeriod,
    link,
    past = false,
  }: Props = $props();
</script>

<div class="relative flex items-start gap-6 group">
  <!-- Timeline dot -->
  <div
    class="relative z-10 flex-shrink-0 size-10 rounded-full bg-ctp-base border-2 border-ctp-surface2 flex items-center justify-center transition-all duration-300 group-hover:border-accent-color group-hover:scale-110 group-hover:border-[3px] accent-glow"
  ></div>

  <!-- Content -->
  <div
    class="flex-1 pb-8 transition-all duration-300 group-hover:-translate-y-1"
  >
    <div
      class="rounded-lg p-4 -m-4 transition-all duration-300 group-hover:bg-ctp-surface0/50 group-hover:shadow-lg"
    >
      <HoverCard.Root>
        <HoverCard.Trigger
          class="inline-block cursor-pointer group/trigger"
          {...link
            ? { href: link, target: "_blank", rel: "noopener noreferrer" }
            : {}}
        >
          <h3 class="font-semibold text-lg mb-1 transition-colors duration-200">
            <span class="accent-color hover:underline">{name}</span
            >{#if past}<span class="text-ctp-overlay0">{" "}(past)</span>{/if}
          </h3>
        </HoverCard.Trigger>
        <HoverCard.Content class="w-80">
          <div class="flex justify-between space-x-4">
            <Avatar.Root>
              {#if logo}
                <Avatar.Image src={logo} />
              {/if}
              <Avatar.Fallback>{fallback}</Avatar.Fallback>
            </Avatar.Root>
            <div class="space-y-1">
              <h4 class="text-sm font-semibold accent">{name}</h4>
              <p class="text-sm">
                {description}
              </p>
              <div class="flex items-center pt-2">
                <CalendarDaysIcon class="me-2 size-4 opacity-70" />
                <span class="text-muted-foreground text-xs">
                  {timePeriod}
                </span>
              </div>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>

      <p
        class="text-sm text-ctp-subtext0 mb-2 transition-colors duration-200 group-hover:text-ctp-subtext1"
      >
        {description}
      </p>

      <div
        class="flex items-center text-xs text-ctp-overlay1 transition-colors duration-200 group-hover:text-ctp-overlay2"
      >
        <CalendarDaysIcon class="me-1.5 size-3.5" />
        <span>{timePeriod}</span>
      </div>
    </div>
  </div>
</div>
