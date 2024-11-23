import { Marker as GMarker } from "@react-google-maps/api";
import colors from "tailwindcss/colors";

// import { Mission } from "@/mission/domain/Mission";
// import { missionTypes } from "@/mission/domain/MissionType";
// import ClusterMarker from "./ClusterMarker";
import { generateIcon } from "../utils/generateSvgIcon";

export const Marker = ({
  marker,
  mission,
  onPress,
}: {
  marker?: any;
  mission: any;
  onPress?: (id: string) => void;
}) => {
  const onClick = () => {
    // router.push(`/mission/${mission.id}`);
  };
  // const key = marker.properties.id || marker.geometry.coordinates[0];
  return (
    <GMarker
      clickable
      onClick={onClick}
      shape={{
        type: "circle",
        coords: [0, 0, 24],
      }}
      icon={{
        url: generateIcon(mission),
        anchor: { x: 12, y: 16, equals: () => true },
      }}
      key={mission.id}
      position={{ lat: mission.lat as number, lng: mission.long as number }}
    />
  );
};
