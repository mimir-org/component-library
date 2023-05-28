export interface AnimationSystem {
  fade: Record<string, unknown>;
  scale: Record<string, unknown>;
  selectHover: Record<string, unknown>;
  buttonTap: Record<string, unknown>;
  checkboxTap: Record<string, unknown>;
  radioButtonTap: Record<string, unknown>;
  from: (direction: "top" | "right" | "bottom" | "left", distance?: number) => Record<string, unknown>;
}
