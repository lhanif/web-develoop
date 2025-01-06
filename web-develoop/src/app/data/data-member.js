// data-member.js
const members = [
    {
        image: "/image/novanda.png",
        name: "Novanda Havid Ramadhani",
        title: "Design Director",
        socialLinks: [
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/novandahr/",
                iconPath: "M17.75,3H6.25C4.458,3,3,4.458,3,6.25v11.5C3,19.542,4.458,21,6.25,21h11.5c1.792,0,3.25-1.458,3.25-3.25V6.25	C21,4.458,19.542,3,17.75,3z M9.237,16H7.063V9.962h2.174V16z M8.11,8.857C7.445,8.857,7,8.412,7,7.819	c0-0.589,0.445-1.033,1.186-1.033c0.665,0,1.105,0.445,1.105,1.033C9.291,8.412,8.851,8.857,8.11,8.857z M17,16h-2.107v-3.302	c0-0.912-0.562-1.123-0.773-1.123c-0.211,0-0.912,0.144-0.912,1.123c0,0.144,0,3.302,0,3.302h-2.174V9.962h2.174v0.845	c0.283-0.494,0.845-0.845,1.896-0.845S17,10.807,17,12.698V16z",
            },
            {
                label: "Github",
                url: "https://github.com/novandahvd",
                iconPath: "M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z",
            },
            {
                label: "Instagram",
                url: "https://www.instagram.com/novanda_h.r/",
                iconPath: "M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 17.25 5.5 C 17.94 5.5 18.5 6.06 18.5 6.75 C 18.5 7.44 17.94 8 17.25 8 C 16.56 8 16 7.44 16 6.75 C 16 6.06 16.56 5.5 17.25 5.5 z M 12 7 C 14.757 7 17 9.243 17 12 C 17 14.757 14.757 17 12 17 C 9.243 17 7 14.757 7 12 C 7 9.243 9.243 7 12 7 z M 12 9.5 A 2.5 2.5 0 0 0 12 14.5 A 2.5 2.5 0 0 0 12 9.5 z",
            },
            {
                label: "Tiktok",
                url: "https://www.tiktok.com/@gogorigoh",
                iconPath: " M18.25,3H5.75C4.233,3,3,4.233,3,5.75v12.5C3,19.767,4.233,21,5.75,21h12.5c1.517,0,2.75-1.233,2.75-2.75V5.75	C21,4.233,19.767,3,18.25,3z M16.956,11.503C16.846,11.81,16.558,12,16.25,12c-0.084,0-0.169-0.014-0.253-0.044	c-0.672-0.241-1.385-0.573-1.997-1.078V14c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-1.265,0.8-2.4,1.99-2.826	c0.389-0.141,0.819,0.063,0.958,0.454c0.14,0.39-0.063,0.819-0.454,0.958C9.9,12.799,9.5,13.367,9.5,14c0,0.827,0.673,1.5,1.5,1.5	s1.5-0.673,1.5-1.5V7.75c0-0.043,0.018-0.08,0.025-0.121c0.009-0.05,0.012-0.101,0.03-0.148C12.572,7.436,12.6,7.4,12.625,7.36	c0.026-0.042,0.048-0.085,0.082-0.121c0.032-0.034,0.072-0.057,0.11-0.085c0.04-0.029,0.076-0.061,0.122-0.082	c0.044-0.02,0.093-0.027,0.142-0.038c0.041-0.01,0.078-0.03,0.122-0.033c0.009-0.001,0.016,0.004,0.024,0.003	C13.235,7.004,13.242,7,13.25,7c0.04,0,0.075,0.017,0.114,0.023c0.054,0.008,0.108,0.012,0.158,0.032	c0.04,0.016,0.072,0.042,0.109,0.064c0.046,0.028,0.093,0.052,0.132,0.089c0.033,0.031,0.055,0.07,0.081,0.106	c0.03,0.041,0.063,0.078,0.084,0.125c0.02,0.044,0.026,0.093,0.038,0.141c0.01,0.042,0.03,0.079,0.033,0.123	c0.105,1.651,1.078,2.331,2.504,2.842C16.893,10.684,17.096,11.113,16.956,11.503z",
            },
            {
                label: "X",
                url: "#",
                iconPath: " M 17.476562 2.9902344 A 1.0001 1.0001 0 0 0 16.724609 3.3691406 L 12.509766 8.5546875 L 9.0566406 3.7714844 C 8.7066406 3.2874844 8.1458281 3 7.5488281 3 L 4.078125 3 C 3.420125 3 3.0388281 3.7462969 3.4238281 4.2792969 L 9.3339844 12.462891 L 3.7246094 19.369141 A 1.0001 1.0001 0 1 0 5.2753906 20.630859 L 10.548828 14.142578 L 14.943359 20.228516 C 15.293359 20.712516 15.854172 21 16.451172 21 L 19.921875 21 C 20.579875 21 20.961172 20.253703 20.576172 19.720703 L 13.724609 10.232422 L 18.275391 4.6308594 A 1.0001 1.0001 0 0 0 17.476562 2.9902344 z M 6.4101562 5 L 7.4765625 5 L 17.587891 19 L 16.523438 19 L 6.4101562 5 z",
            },
           
        ]
    },
    {
        image: "/image/hanif.png",
        name: "Luthfi Hanif",
        title: "Lead Developer",
        socialLinks: [
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/luthfi-hanif/",
                iconPath: "M17.75,3H6.25C4.458,3,3,4.458,3,6.25v11.5C3,19.542,4.458,21,6.25,21h11.5c1.792,0,3.25-1.458,3.25-3.25V6.25	C21,4.458,19.542,3,17.75,3z M9.237,16H7.063V9.962h2.174V16z M8.11,8.857C7.445,8.857,7,8.412,7,7.819	c0-0.589,0.445-1.033,1.186-1.033c0.665,0,1.105,0.445,1.105,1.033C9.291,8.412,8.851,8.857,8.11,8.857z M17,16h-2.107v-3.302	c0-0.912-0.562-1.123-0.773-1.123c-0.211,0-0.912,0.144-0.912,1.123c0,0.144,0,3.302,0,3.302h-2.174V9.962h2.174v0.845	c0.283-0.494,0.845-0.845,1.896-0.845S17,10.807,17,12.698V16z",
            },
            {
                label: "Github",
                url: "https://github.com/lhanif",
                iconPath: "M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z",
            },
            {
                label: "Instagram",
                url: "https://www.instagram.com/luthfihnf_/",
                iconPath: "M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 17.25 5.5 C 17.94 5.5 18.5 6.06 18.5 6.75 C 18.5 7.44 17.94 8 17.25 8 C 16.56 8 16 7.44 16 6.75 C 16 6.06 16.56 5.5 17.25 5.5 z M 12 7 C 14.757 7 17 9.243 17 12 C 17 14.757 14.757 17 12 17 C 9.243 17 7 14.757 7 12 C 7 9.243 9.243 7 12 7 z M 12 9.5 A 2.5 2.5 0 0 0 12 14.5 A 2.5 2.5 0 0 0 12 9.5 z",
            },
            {
                label: "Tiktok",
                url: "https://www.tiktok.com/@lhaneef",
                iconPath: " M18.25,3H5.75C4.233,3,3,4.233,3,5.75v12.5C3,19.767,4.233,21,5.75,21h12.5c1.517,0,2.75-1.233,2.75-2.75V5.75	C21,4.233,19.767,3,18.25,3z M16.956,11.503C16.846,11.81,16.558,12,16.25,12c-0.084,0-0.169-0.014-0.253-0.044	c-0.672-0.241-1.385-0.573-1.997-1.078V14c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-1.265,0.8-2.4,1.99-2.826	c0.389-0.141,0.819,0.063,0.958,0.454c0.14,0.39-0.063,0.819-0.454,0.958C9.9,12.799,9.5,13.367,9.5,14c0,0.827,0.673,1.5,1.5,1.5	s1.5-0.673,1.5-1.5V7.75c0-0.043,0.018-0.08,0.025-0.121c0.009-0.05,0.012-0.101,0.03-0.148C12.572,7.436,12.6,7.4,12.625,7.36	c0.026-0.042,0.048-0.085,0.082-0.121c0.032-0.034,0.072-0.057,0.11-0.085c0.04-0.029,0.076-0.061,0.122-0.082	c0.044-0.02,0.093-0.027,0.142-0.038c0.041-0.01,0.078-0.03,0.122-0.033c0.009-0.001,0.016,0.004,0.024,0.003	C13.235,7.004,13.242,7,13.25,7c0.04,0,0.075,0.017,0.114,0.023c0.054,0.008,0.108,0.012,0.158,0.032	c0.04,0.016,0.072,0.042,0.109,0.064c0.046,0.028,0.093,0.052,0.132,0.089c0.033,0.031,0.055,0.07,0.081,0.106	c0.03,0.041,0.063,0.078,0.084,0.125c0.02,0.044,0.026,0.093,0.038,0.141c0.01,0.042,0.03,0.079,0.033,0.123	c0.105,1.651,1.078,2.331,2.504,2.842C16.893,10.684,17.096,11.113,16.956,11.503z",
            },
            {
                label: "X",
                url: "#",
                iconPath: " M 17.476562 2.9902344 A 1.0001 1.0001 0 0 0 16.724609 3.3691406 L 12.509766 8.5546875 L 9.0566406 3.7714844 C 8.7066406 3.2874844 8.1458281 3 7.5488281 3 L 4.078125 3 C 3.420125 3 3.0388281 3.7462969 3.4238281 4.2792969 L 9.3339844 12.462891 L 3.7246094 19.369141 A 1.0001 1.0001 0 1 0 5.2753906 20.630859 L 10.548828 14.142578 L 14.943359 20.228516 C 15.293359 20.712516 15.854172 21 16.451172 21 L 19.921875 21 C 20.579875 21 20.961172 20.253703 20.576172 19.720703 L 13.724609 10.232422 L 18.275391 4.6308594 A 1.0001 1.0001 0 0 0 17.476562 2.9902344 z M 6.4101562 5 L 7.4765625 5 L 17.587891 19 L 16.523438 19 L 6.4101562 5 z",
            },
        ]
    },
    {
        image: "/image/eka.png",
        name: "Septian Eka Rahmadi",
        title: "Full Stack Developer",
        socialLinks: [
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/eka-rahmadi/",
                iconPath: "M17.75,3H6.25C4.458,3,3,4.458,3,6.25v11.5C3,19.542,4.458,21,6.25,21h11.5c1.792,0,3.25-1.458,3.25-3.25V6.25	C21,4.458,19.542,3,17.75,3z M9.237,16H7.063V9.962h2.174V16z M8.11,8.857C7.445,8.857,7,8.412,7,7.819	c0-0.589,0.445-1.033,1.186-1.033c0.665,0,1.105,0.445,1.105,1.033C9.291,8.412,8.851,8.857,8.11,8.857z M17,16h-2.107v-3.302	c0-0.912-0.562-1.123-0.773-1.123c-0.211,0-0.912,0.144-0.912,1.123c0,0.144,0,3.302,0,3.302h-2.174V9.962h2.174v0.845	c0.283-0.494,0.845-0.845,1.896-0.845S17,10.807,17,12.698V16z",
            },
            {
                label: "Github",
                url: "https://github.com/ekarahmadi",
                iconPath: "M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z",
            },
            {
                label: "Instagram",
                url: "https://www.instagram.com/eka_rahmadi/",
                iconPath: "M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 17.25 5.5 C 17.94 5.5 18.5 6.06 18.5 6.75 C 18.5 7.44 17.94 8 17.25 8 C 16.56 8 16 7.44 16 6.75 C 16 6.06 16.56 5.5 17.25 5.5 z M 12 7 C 14.757 7 17 9.243 17 12 C 17 14.757 14.757 17 12 17 C 9.243 17 7 14.757 7 12 C 7 9.243 9.243 7 12 7 z M 12 9.5 A 2.5 2.5 0 0 0 12 14.5 A 2.5 2.5 0 0 0 12 9.5 z",
            },
            {
                label: "Tiktok",
                url: "https://www.tiktok.com/@eka_rahmadi",
                iconPath: " M18.25,3H5.75C4.233,3,3,4.233,3,5.75v12.5C3,19.767,4.233,21,5.75,21h12.5c1.517,0,2.75-1.233,2.75-2.75V5.75	C21,4.233,19.767,3,18.25,3z M16.956,11.503C16.846,11.81,16.558,12,16.25,12c-0.084,0-0.169-0.014-0.253-0.044	c-0.672-0.241-1.385-0.573-1.997-1.078V14c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-1.265,0.8-2.4,1.99-2.826	c0.389-0.141,0.819,0.063,0.958,0.454c0.14,0.39-0.063,0.819-0.454,0.958C9.9,12.799,9.5,13.367,9.5,14c0,0.827,0.673,1.5,1.5,1.5	s1.5-0.673,1.5-1.5V7.75c0-0.043,0.018-0.08,0.025-0.121c0.009-0.05,0.012-0.101,0.03-0.148C12.572,7.436,12.6,7.4,12.625,7.36	c0.026-0.042,0.048-0.085,0.082-0.121c0.032-0.034,0.072-0.057,0.11-0.085c0.04-0.029,0.076-0.061,0.122-0.082	c0.044-0.02,0.093-0.027,0.142-0.038c0.041-0.01,0.078-0.03,0.122-0.033c0.009-0.001,0.016,0.004,0.024,0.003	C13.235,7.004,13.242,7,13.25,7c0.04,0,0.075,0.017,0.114,0.023c0.054,0.008,0.108,0.012,0.158,0.032	c0.04,0.016,0.072,0.042,0.109,0.064c0.046,0.028,0.093,0.052,0.132,0.089c0.033,0.031,0.055,0.07,0.081,0.106	c0.03,0.041,0.063,0.078,0.084,0.125c0.02,0.044,0.026,0.093,0.038,0.141c0.01,0.042,0.03,0.079,0.033,0.123	c0.105,1.651,1.078,2.331,2.504,2.842C16.893,10.684,17.096,11.113,16.956,11.503z",
            },
            {
                label: "X",
                url: "#",
                iconPath: " M 17.476562 2.9902344 A 1.0001 1.0001 0 0 0 16.724609 3.3691406 L 12.509766 8.5546875 L 9.0566406 3.7714844 C 8.7066406 3.2874844 8.1458281 3 7.5488281 3 L 4.078125 3 C 3.420125 3 3.0388281 3.7462969 3.4238281 4.2792969 L 9.3339844 12.462891 L 3.7246094 19.369141 A 1.0001 1.0001 0 1 0 5.2753906 20.630859 L 10.548828 14.142578 L 14.943359 20.228516 C 15.293359 20.712516 15.854172 21 16.451172 21 L 19.921875 21 C 20.579875 21 20.961172 20.253703 20.576172 19.720703 L 13.724609 10.232422 L 18.275391 4.6308594 A 1.0001 1.0001 0 0 0 17.476562 2.9902344 z M 6.4101562 5 L 7.4765625 5 L 17.587891 19 L 16.523438 19 L 6.4101562 5 z",
            },
        ]
    },
    {
        image: "image/rijal.png",
        name: "Rijal Athoillah",
        title: "Full Stack Developer",
        socialLinks: [
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/rijalath/",
                iconPath: "M17.75,3H6.25C4.458,3,3,4.458,3,6.25v11.5C3,19.542,4.458,21,6.25,21h11.5c1.792,0,3.25-1.458,3.25-3.25V6.25	C21,4.458,19.542,3,17.75,3z M9.237,16H7.063V9.962h2.174V16z M8.11,8.857C7.445,8.857,7,8.412,7,7.819	c0-0.589,0.445-1.033,1.186-1.033c0.665,0,1.105,0.445,1.105,1.033C9.291,8.412,8.851,8.857,8.11,8.857z M17,16h-2.107v-3.302	c0-0.912-0.562-1.123-0.773-1.123c-0.211,0-0.912,0.144-0.912,1.123c0,0.144,0,3.302,0,3.302h-2.174V9.962h2.174v0.845	c0.283-0.494,0.845-0.845,1.896-0.845S17,10.807,17,12.698V16z",
            },
            {
                label: "Github",
                url: "#",
                iconPath: "M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z",
            },
            {
                label: "Instagram",
                url: "https://www.instagram.com/rijalathoillah/",
                iconPath: "M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 17.25 5.5 C 17.94 5.5 18.5 6.06 18.5 6.75 C 18.5 7.44 17.94 8 17.25 8 C 16.56 8 16 7.44 16 6.75 C 16 6.06 16.56 5.5 17.25 5.5 z M 12 7 C 14.757 7 17 9.243 17 12 C 17 14.757 14.757 17 12 17 C 9.243 17 7 14.757 7 12 C 7 9.243 9.243 7 12 7 z M 12 9.5 A 2.5 2.5 0 0 0 12 14.5 A 2.5 2.5 0 0 0 12 9.5 z",
            },
            {
                label: "Tiktok",
                url: "#",
                iconPath: " M18.25,3H5.75C4.233,3,3,4.233,3,5.75v12.5C3,19.767,4.233,21,5.75,21h12.5c1.517,0,2.75-1.233,2.75-2.75V5.75	C21,4.233,19.767,3,18.25,3z M16.956,11.503C16.846,11.81,16.558,12,16.25,12c-0.084,0-0.169-0.014-0.253-0.044	c-0.672-0.241-1.385-0.573-1.997-1.078V14c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-1.265,0.8-2.4,1.99-2.826	c0.389-0.141,0.819,0.063,0.958,0.454c0.14,0.39-0.063,0.819-0.454,0.958C9.9,12.799,9.5,13.367,9.5,14c0,0.827,0.673,1.5,1.5,1.5	s1.5-0.673,1.5-1.5V7.75c0-0.043,0.018-0.08,0.025-0.121c0.009-0.05,0.012-0.101,0.03-0.148C12.572,7.436,12.6,7.4,12.625,7.36	c0.026-0.042,0.048-0.085,0.082-0.121c0.032-0.034,0.072-0.057,0.11-0.085c0.04-0.029,0.076-0.061,0.122-0.082	c0.044-0.02,0.093-0.027,0.142-0.038c0.041-0.01,0.078-0.03,0.122-0.033c0.009-0.001,0.016,0.004,0.024,0.003	C13.235,7.004,13.242,7,13.25,7c0.04,0,0.075,0.017,0.114,0.023c0.054,0.008,0.108,0.012,0.158,0.032	c0.04,0.016,0.072,0.042,0.109,0.064c0.046,0.028,0.093,0.052,0.132,0.089c0.033,0.031,0.055,0.07,0.081,0.106	c0.03,0.041,0.063,0.078,0.084,0.125c0.02,0.044,0.026,0.093,0.038,0.141c0.01,0.042,0.03,0.079,0.033,0.123	c0.105,1.651,1.078,2.331,2.504,2.842C16.893,10.684,17.096,11.113,16.956,11.503z",
            },
            {
                label: "X",
                url: "#",
                iconPath: " M 17.476562 2.9902344 A 1.0001 1.0001 0 0 0 16.724609 3.3691406 L 12.509766 8.5546875 L 9.0566406 3.7714844 C 8.7066406 3.2874844 8.1458281 3 7.5488281 3 L 4.078125 3 C 3.420125 3 3.0388281 3.7462969 3.4238281 4.2792969 L 9.3339844 12.462891 L 3.7246094 19.369141 A 1.0001 1.0001 0 1 0 5.2753906 20.630859 L 10.548828 14.142578 L 14.943359 20.228516 C 15.293359 20.712516 15.854172 21 16.451172 21 L 19.921875 21 C 20.579875 21 20.961172 20.253703 20.576172 19.720703 L 13.724609 10.232422 L 18.275391 4.6308594 A 1.0001 1.0001 0 0 0 17.476562 2.9902344 z M 6.4101562 5 L 7.4765625 5 L 17.587891 19 L 16.523438 19 L 6.4101562 5 z",
            },
        ]
    },
    {
        image: "image/ali.png",
        name: "John Doe",
        title: "Full Stack Developer",
        socialLinks: [
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/alimochtarahd/",
                iconPath: "M17.75,3H6.25C4.458,3,3,4.458,3,6.25v11.5C3,19.542,4.458,21,6.25,21h11.5c1.792,0,3.25-1.458,3.25-3.25V6.25	C21,4.458,19.542,3,17.75,3z M9.237,16H7.063V9.962h2.174V16z M8.11,8.857C7.445,8.857,7,8.412,7,7.819	c0-0.589,0.445-1.033,1.186-1.033c0.665,0,1.105,0.445,1.105,1.033C9.291,8.412,8.851,8.857,8.11,8.857z M17,16h-2.107v-3.302	c0-0.912-0.562-1.123-0.773-1.123c-0.211,0-0.912,0.144-0.912,1.123c0,0.144,0,3.302,0,3.302h-2.174V9.962h2.174v0.845	c0.283-0.494,0.845-0.845,1.896-0.845S17,10.807,17,12.698V16z",
            },
            {
                label: "Github",
                url: "https://github.com/alimxtar",
                iconPath: "M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z",
            },
            {
                label: "Instagram",
                url: "https://www.instagram.com/alimochtarr/",
                iconPath: "M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 17.25 5.5 C 17.94 5.5 18.5 6.06 18.5 6.75 C 18.5 7.44 17.94 8 17.25 8 C 16.56 8 16 7.44 16 6.75 C 16 6.06 16.56 5.5 17.25 5.5 z M 12 7 C 14.757 7 17 9.243 17 12 C 17 14.757 14.757 17 12 17 C 9.243 17 7 14.757 7 12 C 7 9.243 9.243 7 12 7 z M 12 9.5 A 2.5 2.5 0 0 0 12 14.5 A 2.5 2.5 0 0 0 12 9.5 z",
            },
            {
                label: "Tiktok",
                url: "#",
                iconPath: " M18.25,3H5.75C4.233,3,3,4.233,3,5.75v12.5C3,19.767,4.233,21,5.75,21h12.5c1.517,0,2.75-1.233,2.75-2.75V5.75	C21,4.233,19.767,3,18.25,3z M16.956,11.503C16.846,11.81,16.558,12,16.25,12c-0.084,0-0.169-0.014-0.253-0.044	c-0.672-0.241-1.385-0.573-1.997-1.078V14c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-1.265,0.8-2.4,1.99-2.826	c0.389-0.141,0.819,0.063,0.958,0.454c0.14,0.39-0.063,0.819-0.454,0.958C9.9,12.799,9.5,13.367,9.5,14c0,0.827,0.673,1.5,1.5,1.5	s1.5-0.673,1.5-1.5V7.75c0-0.043,0.018-0.08,0.025-0.121c0.009-0.05,0.012-0.101,0.03-0.148C12.572,7.436,12.6,7.4,12.625,7.36	c0.026-0.042,0.048-0.085,0.082-0.121c0.032-0.034,0.072-0.057,0.11-0.085c0.04-0.029,0.076-0.061,0.122-0.082	c0.044-0.02,0.093-0.027,0.142-0.038c0.041-0.01,0.078-0.03,0.122-0.033c0.009-0.001,0.016,0.004,0.024,0.003	C13.235,7.004,13.242,7,13.25,7c0.04,0,0.075,0.017,0.114,0.023c0.054,0.008,0.108,0.012,0.158,0.032	c0.04,0.016,0.072,0.042,0.109,0.064c0.046,0.028,0.093,0.052,0.132,0.089c0.033,0.031,0.055,0.07,0.081,0.106	c0.03,0.041,0.063,0.078,0.084,0.125c0.02,0.044,0.026,0.093,0.038,0.141c0.01,0.042,0.03,0.079,0.033,0.123	c0.105,1.651,1.078,2.331,2.504,2.842C16.893,10.684,17.096,11.113,16.956,11.503z",
            },
            {
                label: "X",
                url: "#",
                iconPath: " M 17.476562 2.9902344 A 1.0001 1.0001 0 0 0 16.724609 3.3691406 L 12.509766 8.5546875 L 9.0566406 3.7714844 C 8.7066406 3.2874844 8.1458281 3 7.5488281 3 L 4.078125 3 C 3.420125 3 3.0388281 3.7462969 3.4238281 4.2792969 L 9.3339844 12.462891 L 3.7246094 19.369141 A 1.0001 1.0001 0 1 0 5.2753906 20.630859 L 10.548828 14.142578 L 14.943359 20.228516 C 15.293359 20.712516 15.854172 21 16.451172 21 L 19.921875 21 C 20.579875 21 20.961172 20.253703 20.576172 19.720703 L 13.724609 10.232422 L 18.275391 4.6308594 A 1.0001 1.0001 0 0 0 17.476562 2.9902344 z M 6.4101562 5 L 7.4765625 5 L 17.587891 19 L 16.523438 19 L 6.4101562 5 z",
            },
        ]
    }
];

export default members;