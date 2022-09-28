import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos,justifyContent,direction }) => {
  if(!videos?.length) return 'Loading...'
  return (
    <Stack sx={{
      justifyContent:justifyContent
    }} direction={direction ||"row"} flexWrap="wrap" gap={2}>
      {videos.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
