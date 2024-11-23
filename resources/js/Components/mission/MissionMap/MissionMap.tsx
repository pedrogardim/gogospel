import React, { useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { Mission } from "@/shared/mission/domain/Mission";
import { mapSettings } from "./settings";
import { Marker } from "./partials/Marker";

export const MissionMap = ({missions}:{missions: Mission[]}) => {
  const pathname = "/"
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCcY7g-HEkrTVHkuj5MvNDRPQNGeQF8CzA",
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  const onRouteChange = React.useCallback(
    (pathname: string) => {
      if (!map) return;
      const missionPrefix = "/mission/";
      if (!pathname.startsWith(missionPrefix)) {
        map.setCenter({ lat: 0, lng: 0 });
        map.setZoom(2);
        return;
      }

      const id = pathname.replace(missionPrefix, "");
      const mission = missions?.find((mission) => mission.id === parseInt(id));
      if (!mission) {
        map.setCenter({ lat: 0, lng: 0 });
        map.setZoom(2);
        return;
      }

      const { lat, long } = mission;
      map.setCenter({ lat: lat as number, lng: long as number });
      map.setZoom(16);
    },
    [map, missions]
  );

  useEffect(() => {
    onRouteChange(pathname);
  }, [pathname, missions, map]);

  return isLoaded ? (
    <GoogleMap
      options={{
        styles: mapSettings.customMapStyle,
        streetViewControl: false,
        disableDefaultUI: true,
        streetView: null,
      }}
      mapContainerStyle={{ height: "100vh", width: "100%" }}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {missions && missions.map((mission) => <Marker mission={mission} key={mission.id} />)}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(MissionMap);
