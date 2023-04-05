import React from 'react';
import BrowseData from '@/components/(browseAll)/browseData';

const BrowseAll = () => {
    const data = [
        {id: 1, text: "Podcasts", color: "E13300", image: "https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588"},
        {id: 2, text: "Live Events", color: "7358FF", image: "https://concerts.spotifycdn.com/images/live-events_category-image.jpg"},
        {id: 3, text: "Made For You", color: "1E3264", image: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe"},
        {id: 4, text: "New releases", color: "E8115B", image: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe"},
        {id: 5, text: "Pop", color: "148A08", image: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112"},
        {id: 6, text: "Hip-Hop", color: "BC5900", image: "https://i.scdn.co/image/ab67fb8200005caf7e11c8413dc33c00740579c1"},
        {id: 7, text: "Mood", color: "E1118C", image: "https://i.scdn.co/image/ab67fb8200005caf271f9d895003c5f5561c1354"},
        {id: 8, text: "Ramadan", color: "503750", image: "https://i.scdn.co/image/ab67fb8200005caf433b1d3680909c5f912d5780"},
        {id: 9, text: "Charts", color: "8D67AB", image: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg"},
        {id: 10, text: "Trending", color: "B02897", image: "https://i.scdn.co/image/ab67fb8200005caf1867113f5218598847550acd"},
        {id: 11, text: "Dance/Electronic", color: "D84000", image: "https://i.scdn.co/image/ab67fb8200005cafdfdaac1cf9574a196ca25196"},
        {id: 12, text: "Rock", color: "E91429", image: "https://i.scdn.co/image/ab67fb8200005cafae7e69beb88f16969641b53e"},
        {id: 13, text: "Discover", color: "E91429", image: "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg"},
        {id: 14, text: "Workout", color: "777777", image: "https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15"},
        {id: 15, text: "Country", color: "1E3264", image: "https://i.scdn.co/image/ab67fb8200005cafc0d2222b4c6441930e1a386e"},
        {id: 16, text: "Party", color: "537AA1", image: "https://i.scdn.co/image/ab67fb8200005cafcbf80f8ea695536eace4fd2c"},
    ]
    return (
        <div className="p-8 flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-white">Browse all</h1>
            <div className="flex flex-wrap justify-between gap-y-10">
                {data.map(item => (
                    <BrowseData key={item.key} {...item}/>
                ))}
            </div>
        </div>
    );
};

export default BrowseAll;
