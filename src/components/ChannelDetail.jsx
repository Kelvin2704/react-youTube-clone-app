import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  console.log(channelDetail, videos);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            backgroundColor: "#FFCC70",
            backgroundImage: "linear-gradient(43deg, #FFCC70 14%, #C850C0 56%, #4158D0 94%)",
            zIndex: 10,
            height: "300px",
          }}
        ></div>
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box display='flex' p='2'>
          <Box/>
          <Videos videos={videos} justifyContent='center'/>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
