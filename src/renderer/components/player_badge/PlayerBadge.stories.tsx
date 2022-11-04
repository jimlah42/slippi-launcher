import { PlayerBadge } from "./PlayerBadge";

export default {
  title: "components/PlayerBadge",
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export const NullValues = () => {
  return <PlayerBadge characterId={null} characterColor={null} port={1} text="Unknown" />;
};

export const TagVariant = () => {
  return <PlayerBadge variant="tag" characterId={20} characterColor={0} port={1} text="Player 1" />;
};

export const ConnectCodeVariant = () => {
  return <PlayerBadge variant="code" characterId={20} characterColor={0} port={1} text="ABC#123" />;
};
