import type { DiscoveredConsoleInfo } from "@console/types";
import { css } from "@emotion/react";
import CircularProgress from "@mui/material/CircularProgress";

import { InfoBlock } from "@/components/InfoBlock";

import { NewConnectionItem } from "./NewConnectionItem";

type NewConnectionListProps = {
  isScanning?: boolean;
  consoleItems: DiscoveredConsoleInfo[];
  onClick: (conn: DiscoveredConsoleInfo) => void;
};

export const NewConnectionList = ({ consoleItems, isScanning, onClick }: NewConnectionListProps) => {
  return (
    <InfoBlock
      title={
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <div>New Connections ({consoleItems.length})</div>
          {isScanning && <CircularProgress size={16} thickness={6} color="inherit" />}
        </div>
      }
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        {consoleItems.length > 0 ? (
          consoleItems.map((item) => {
            return <NewConnectionItem key={item.ip} onAdd={() => onClick(item)} ip={item.ip} nickname={item.name} />;
          })
        ) : (
          <div>Consoles detected on the network will show up here.</div>
        )}
      </div>
    </InfoBlock>
  );
};
