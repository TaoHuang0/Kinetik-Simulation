const SampleFile = {
  weeks: 52,
  stages: [
    "Prospecting",
    "Lead Qualification",
    "Demo /Meeting",
    "Proposal",
    "Negotiation",
    "Win",
    "Loss",
  ],
  sources: [
    "Leads",
    "Opportunities",
    "Progession",
    "Closing Velocity",
    "Win Rate",
    "Market Dynamics",
  ],
  ops: [10, 5, 2, 0, 0, 0, 0],
  means: [2, 5, 4, 3, 2, 6],
  stds: [0.5, 1.5, 1.3, 0.75, 0.3, 2.5],
  newOpsProbabilities: [0.35, 0.35, 0.2, 0.05, 0.05, 0, 0],
  opsProbabilities: [
    [0.7, 0.05, 0.07, 0.06, 0.02, 0.08, 0.02],
    [0.2, 0.1, 0.3, 0.15, 0.2, 0.03, 0.02],
    [0.03, 0.05, 0.65, 0.15, 0.04, 0.07, 0.01],
    [0.01, 0, 0, 0.78, 0.11, 0.08, 0.02],
    [0, 0, 0.03, 0.02, 0.82, 0.11, 0.02],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1],
  ],
  sliderValues: [0, 0, 0, 0, 0, 0],
  dealSizeMean: 1,
  dealSizeStd: 0.12,
};

export default SampleFile;
