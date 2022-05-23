import avatar from '../pictures/avatar.png'
import france from '../pictures/france1.jpg'
import audio from '../audio/audio.mp3'
import waterfall from '../videos/waterfall.mp4'
import ChenCohen from '../pictures/ChenCohen.jpg'
import Hezi from '../pictures/Hezi.jpg'
import Noam from '../pictures/Noam.jpg'
import OrielZehavi from '../pictures/OrielZehavi.jpg'
import Roei from '../pictures/Roei.jpg'
import Omer from '../pictures/Omer.jpg'




export const app_data = {
    oriel: {
      password: "orielgg",
      displayName: "Oriel Zehavi",
      picture: OrielZehavi,
      contacts: [
        {
          username: "roeigh",
          displayName: "Roei Gehasi",
          picture: Roei,
          messages: [
            {
              type: "text",
              from: "you",
              date: new Date(2022, 2, 4, 5, 50),
              content: "Hello I'm Roei",
            },
            {
              type: "image",
              from: "me",
              date: new Date(2022, 2, 4, 6, 50),
              content: france,
            },
            {
              type: "voice",
              from: "you",
              date: new Date(2022, 2, 4, 6, 51),
              content: audio,
            },
            {
              type: "video",
              from: "me",
              date: new Date(2022, 2, 4, 6, 52),
              content: waterfall,
            },
          ],
        },
        {
          username: "omer",
          displayName: "Omer Cohen",
          picture: Omer,
          messages: [
            {
              type: "text",
              from: "you",
              date: new Date(2022, 2, 4, 5, 50),
              content: "Hello I'm Omer",
            },
            {
              type: "image",
              from: "me",
              date: new Date(2022, 2, 4, 6, 50),
              content: france,
            },
            {
              type: "voice",
              from: "you",
              date: new Date(2022, 2, 4, 6, 51),
              content: audio,
            },
            {
              type: "video",
              from: "me",
              date: new Date(2022, 2, 4, 6, 52),
              content: waterfall,
            },
          ],
        },
        {
          username: "noam",
          displayName: "Noam Cohen",
          picture: Noam,
          messages: [
            {
              type: "text",
              from: "you",
              date: new Date(2022, 2, 4, 5, 50),
              content: "Hello I'm Noam",
            },
            {
              type: "image",
              from: "me",
              date: new Date(2022, 2, 4, 6, 50),
              content: france,
            },
            {
              type: "voice",
              from: "you",
              date: new Date(2022, 2, 4, 6, 51),
              content: audio,
            },
            {
              type: "video",
              from: "me",
              date: new Date(2022, 2, 4, 6, 52),
              content: waterfall,
            },
          ],
        },
        {
          username: "chen",
          displayName: "Chen Cohen",
          picture: ChenCohen,
          messages: [
            {
              type: "text",
              from: "you",
              date: new Date(2022, 2, 4, 5, 50),
              content: "Hello I'm Chen",
            },
            {
              type: "image",
              from: "me",
              date: new Date(2022, 2, 4, 6, 50),
              content: france,
            },
            {
              type: "voice",
              from: "you",
              date: new Date(2022, 2, 4, 6, 51),
              content: audio,
            },
            {
              type: "video",
              from: "me",
              date: new Date(2022, 2, 4, 6, 52),
              content: waterfall,
            },
          ],
        },
        {
          username: "hezi",
          displayName: "Hezi Coffee",
          picture: Hezi,
          messages: [
            {
              type: "text",
              from: "you",
              date: new Date(2022, 2, 4, 5, 50),
              content: "Hello I'm Hezi",
            },
            {
              type: "image",
              from: "me",
              date: new Date(2022, 2, 4, 6, 50),
              content: france,
            },
            {
              type: "voice",
              from: "you",
              date: new Date(2022, 2, 4, 6, 51),
              content: audio,
            },
            {
              type: "video",
              from: "me",
              date: new Date(2022, 2, 4, 6, 52),
              content: waterfall,
            },
          ],
        },
      ],
    },
    roeigh: {
      password: "roeigg",
      displayName: "Roei Gehasi",
      picture : Roei,
      contacts: [
        {
          username: "oriel",
          displayName: "Oriel Zehavi",
          picture: OrielZehavi,
          messages: [
            {
              type: "text",
              from: "me",
              date: new Date(2022, 2, 4, 5, 50),
              content: "Hello I'm Roei",
            },
            {
              type: "image",
              from: "you",
              date: new Date(2022, 2, 4, 6, 50),
              content: france,
            },
            {
              type: "voice",
              from: "me",
              date: new Date(2022, 2, 4, 6, 51),
              content: audio,
            },
            {
              type: "video",
              from: "you",
              date: new Date(2022, 2, 4, 6, 52),
              content: waterfall,
            },
          ],
        },
      ],
    },
    omer: {
      password: "omer123",
      displayName: "Omer Cohen",
      picture: Omer,
      contacts: [
        {
          username: "oriel",
          displayName: "Oriel Zehavi",
          picture: OrielZehavi,
          messages: [
            {
              type: "text",
              from: "me",
              date: new Date(2022, 2, 4, 5, 50),
              content: "Hello I'm Omer",
            },
            {
              type: "image",
              from: "you",
              date: new Date(2022, 2, 4, 6, 50),
              content: france,
            },
            {
              type: "voice",
              from: "me",
              date: new Date(2022, 2, 4, 6, 51),
              content: audio,
            },
            {
              type: "video",
              from: "you",
              date: new Date(2022, 2, 4, 6, 52),
              content: waterfall,
            },
          ],
        },
      ],
    },
    noam : {
      password : "noam123",
      displayName: "Noam Cohen",
      picture: Noam,
      contacts: [
        {
          username: "oriel",
          displayName: "Oriel Zehavi",
          picture: OrielZehavi,
          messages: [
            {
              type: "text",
              from: "me",
              date: new Date(2022, 2, 4, 5, 50),
              content: "Hello I'm Noam",
            },
            {
              type: "image",
              from: "you",
              date: new Date(2022, 2, 4, 6, 50),
              content: france,
            },
            {
              type: "voice",
              from: "me",
              date: new Date(2022, 2, 4, 6, 51),
              content: audio,
            },
            {
              type: "video",
              from: "you",
              date: new Date(2022, 2, 4, 6, 52),
              content: waterfall,
            },
          ],
        },
      ],
    },
    chen : {
      password : "chen123",
      displayName: "Chen Cohen",
      picture: ChenCohen,
      contacts: [
        {
          username: "oriel",
          displayName: "Oriel Zehavi",
          picture: OrielZehavi,
          messages: [
            {
              type: "text",
              from: "me",
              date: new Date(2022, 2, 4, 5, 50),
              content: "Hello I'm Chen",
            },
            {
              type: "image",
              from: "you",
              date: new Date(2022, 2, 4, 6, 50),
              content: france,
            },
            {
              type: "voice",
              from: "me",
              date: new Date(2022, 2, 4, 6, 51),
              content: audio,
            },
            {
              type: "video",
              from: "you",
              date: new Date(2022, 2, 4, 6, 52),
              content: waterfall,
            },
          ],
        },
      ],
    },
    hezi : {
      password : "hezi123",
      displayName: "Hezi Coffee",
      picture: Hezi,
      contacts: [
        {
          username: "oriel",
          displayName: "Oriel Zehavi",
          picture: OrielZehavi,
          messages: [
            {
              type: "text",
              from: "me",
              date: new Date(2022, 2, 4, 5, 50),
              content: "Hello I'm Hezi",
            },
            {
              type: "image",
              from: "you",
              date: new Date(2022, 2, 4, 6, 50),
              content: france,
            },
            {
              type: "voice",
              from: "me",
              date: new Date(2022, 2, 4, 6, 51),
              content: audio,
            },
            {
              type: "video",
              from: "you",
              date: new Date(2022, 2, 4, 6, 52),
              content: waterfall,
            },
          ],
        },
      ],
    }
  };