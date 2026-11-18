interface CitySkylineProps {
  className?: string
}

/**
 * CitySkyline — a faint DC-flavored skyline silhouette (monuments + rowhouses).
 * Decorative only; used to ground sections in a real place without raster assets.
 */
export function CitySkyline({ className = '' }: CitySkylineProps) {
  return (
    <svg
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M0 140V96h40v-8h28v8h26V70h10v-9h6v9h10v26h30V58l22-10v14h10v40h26V72h10v-8h10v8h12v44h28V64h8v-9h6v9h8v40h30V52l14-7 14 7v52h26V78h12v-8h8v8h10v26h30V44h6V20h4v24h6v60h30V70h10v-9h8v9h10v34h30V58l20-9v55h26V74h10v-8h12v8h10v30h28V46h8V22h4v24h8v58h30V66h12v-9h8v9h12v38h28V60l18-8v52h26V76h10v-8h10v8h12v28h30V52h6V30h4v22h8v52h28V70h12v-8h8v8h12v34h30V56l16-7v55h26V72h12v-9h8v9h12v32h30V44h6V20h4v24h8v60h28V74h10v-8h12v8h10v30h30V62l16-8v50h26V78h12v-8h8v8h12v26h30V50h6V26h4v24h8v54h30V72h10v-8h12v8h10v32h28V60l18-9v53h26V76h12v-8h8v8h12v28h28V140H0Z"
      />
    </svg>
  )
}
