const SIGNALS = {
  horizon: "6m",
  updated: "2026-09-21",
  note: "Research score only. Not financial advice. Snapshot prices from Sep 21 briefing.",
  coins: {
    bitcoin: {
      bias: "Hold", conviction: "Medium", score: 1,
      reasons: [
        "Regime coin: BTC near $85k after reclaiming $81k. 6-month path still set by ETF flow tide, not headlines.",
        "Spot BTC ETFs saw a strong early-Sep inflow burst then mid-Sep outflows after the CLARITY Act stall and the first Fed hike in years.",
        "Durable positive: tokenized-stock SEC path and easy ETF access. Durable risk: flow reversals and macro."
      ],
      invalidation: "Weekly close back below the $80k recovery zone with sustained ETF outflows."
    },
    ethereum: {
      bias: "Hold", conviction: "Medium", score: 1,
      reasons: [
        "ETH ~$2,727 on the Sep 21 snapshot, riding BTC plus occasional ETF bursts.",
        "ETH funds still swing hard: large Sep 15 outflow day, then later inflow prints. Not a clean 6-month bid yet.",
        "Holds as the second-best structure on this list if BTC stays bid."
      ],
      invalidation: "Lose the mid-$2,400s on a weekly close while ETH ETF flows stay negative."
    },
    dogecoin: {
      bias: "Hold", conviction: "Low", score: 0,
      reasons: [
        "DOGE ~$0.094 is BTC-beta. Moon-mission headlines are not a 6-month demand source.",
        "Bitwise is closing its Dogecoin ETF (last trade targeted mid-Oct). Access was not the bottleneck — demand was.",
        "Remaining DOGE ETFs are tiny vs supply. No new-size 6-month case without X payments or a real flow regime."
      ],
      invalidation: "Confirmed X Money DOGE rail or multi-week DOGE ETF inflows; or a weekly break of $0.08 with BTC weak."
    },
    io: {
      bias: "Reduce", conviction: "Medium", score: -2,
      reasons: [
        "Small cap (~$60M snapshot). Still carrying heavy emission / unlock overhang through 2030.",
        "Next unlock window flagged around Oct 31 (~6% of supply in one calendar item). That is a 6-month supply event.",
        "Burn/IDE story is weaker than marketed (emission-funded). Down ~98% from ATH — bounce risk, not a quality 6-month bid."
      ],
      invalidation: "Unlock absorbed with rising real GPU demand and verifiable fee burn not funded by emissions."
    },
    "akash-network": {
      bias: "Hold", conviction: "Low", score: 0,
      reasons: [
        "AKT ~$0.63. BME live since Mar 2026; confidential-compute product path is the durable item.",
        "On-chain revenue is real but small vs issuance. BME offset is only a fraction of new coins at current usage.",
        "Better structure than IO, still not an Accumulate until usage visibly eats issuance."
      ],
      invalidation: "Usage/revenue run-rate that clearly offsets issuance, or a failed BME / demand fade."
    },
    "render-token": {
      bias: "Hold", conviction: "Low", score: 1,
      reasons: [
        "Largest compute name on this list (Sep 21 briefing ~$1.78). BME design is the 6-month hook.",
        "USD network revenue is still hard to verify — do not treat burn theory as booked demand.",
        "Prefer RENDER over IO on quality; not a high-conviction add until revenue is transparent."
      ],
      invalidation: "Verified demand slump or a large unlock/overhang that BME does not offset."
    }
  }
};
