import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
    PlyrLayout,
    plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

export default function VideoPlayer({
    title,
    src,
}: {
    title: string;
    src: string;
}) {
    return (
        <MediaPlayer title={title} src={src}>
            <MediaProvider />
            <PlyrLayout icons={plyrLayoutIcons} />
        </MediaPlayer>
    );
}
