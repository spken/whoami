<script lang="ts">
  import CalendarDaysIcon from "@lucide/svelte/icons/calendar-days";
  import * as Avatar from "./ui/avatar";
  import * as HoverCard from "./ui/hover-card";

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

<HoverCard.Root>
  <HoverCard.Trigger
    class="flex items-center gap-2 cursor-pointer group"
    {...link
      ? { href: link, target: "_blank", rel: "noopener noreferrer" }
      : {}}
  >
    <Avatar.Root class="size-10">
      {#if logo}
        <Avatar.Image src={logo} />
      {/if}
      <Avatar.Fallback>{fallback}</Avatar.Fallback>
    </Avatar.Root>
    <span
      class="font-medium text-base {past
        ? 'text-ctp-overlay0'
        : 'text-ctp-text'} group-hover-accent"
    >
      {name}{#if past}{" "}(past){/if}
    </span>
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

<style>
  :global(.group:hover) .group-hover-accent {
    color: var(--catppuccin-color-rosewater);
    text-decoration: underline;
  }

  :global([data-accent="rosewater"] .group:hover) .group-hover-accent {
    color: var(--catppuccin-color-rosewater);
  }

  :global([data-accent="flamingo"] .group:hover) .group-hover-accent {
    color: var(--catppuccin-color-flamingo);
  }

  :global([data-accent="pink"] .group:hover) .group-hover-accent {
    color: var(--catppuccin-color-pink);
  }

  :global([data-accent="mauve"] .group:hover) .group-hover-accent {
    color: var(--catppuccin-color-mauve);
  }

  :global([data-accent="red"] .group:hover) .group-hover-accent {
    color: var(--catppuccin-color-red);
  }

  :global([data-accent="maroon"] .group:hover) .group-hover-accent {
    color: var(--catppuccin-color-maroon);
  }

  :global([data-accent="peach"] .group:hover) .group-hover-accent {
    color: var(--catppuccin-color-peach);
  }

  :global([data-accent="yellow"] .group:hover) .group-hover-accent {
    color: var(--catppuccin-color-yellow);
  }

  :global([data-accent="green"] .group:hover) .group-hover-accent {
    color: var(--catppuccin-color-green);
  }

  :global([data-accent="teal"] .group:hover) .group-hover-accent {
    color: var(--catppuccin-color-teal);
  }

  :global([data-accent="sky"] .group:hover) .group-hover-accent {
    color: var(--catppuccin-color-sky);
  }

  :global([data-accent="sapphire"] .group:hover) .group-hover-accent {
    color: var(--catppuccin-color-sapphire);
  }

  :global([data-accent="blue"] .group:hover) .group-hover-accent {
    color: var(--catppuccin-color-blue);
  }

  :global([data-accent="lavender"] .group:hover) .group-hover-accent {
    color: var(--catppuccin-color-lavender);
  }
</style>
