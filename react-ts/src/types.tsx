type ListItemProps = {
  sample: string;
  handleSelect: (sample_name: string) => boolean;
};

type SelectedSamples = {
  sample_1: string | null;
  sample_2: string | null;
};

export type { ListItemProps, SelectedSamples };
