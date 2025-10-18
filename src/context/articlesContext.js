"use client"
import React, { createContext, useContext, useState } from "react";



const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
    const [articles, setArticles] = useState([
        {
            id: 1,
            image: "/articles/article1.jpg",
            title: "Hope dies last",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Anne Henry",
            date: "Mar 28, 2022",
            readTime: "10 Min",
            category: "Art",
        },
        {
            id: 2,
            image: "/articles/article2.jpg",
            title: "The best art museums",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Louise Jensen",
            date: "Mar 28, 2022",
            readTime: "10 Min",
            category: "Sculptures",
        },
        {
            id: 3,
            image: "/articles/article3.jpg",
            title: "The devil is in the details",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Jane Cooper",
            date: "Mar 28, 2022",
            readTime: "35 Min",
            category: "Art",
        },
        {
            id: 4,
            image: "/articles/article4.jpg",
            title: "An inde­struc­tible hope",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Louise Jensen",
            date: "Mar 30, 2022",
            readTime: "12 Min",
            category: "Art",
        },
        {
            id: 5,
            image: "/articles/article5.jpg",
            title: "Street art festival",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Cristofer Vaccaro",
            date: "Mar 28, 2022",
            readTime: "5 Min",
            category: "Street Art",
        },
        {
            id: 6,
            image: "/articles/article6.jpg",
            title: "The chains of our lives",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Louise Jensen",
            date: "Mar 28, 2022",
            readTime: "30 Min",
            category: "Sculptures",
        },
        {
            id: 7,
            image: "/articles/article7.jpg",
            title: "Don’t close your eyes",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Cristofer Vaccaro",
            date: "Sep 22, 2022",
            readTime: "50 Min",
            category: "street art",
        },
        {
            id: 8,
            image: "/articles/article8.jpg",
            title: "Through the eyes of street artists",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Anna Nielsen",
            date: "Apr 15, 2022",
            readTime: "15 Min",
            category: "street art",
        },
        {
            id: 9,
            image: "/articles/article9.jpg",
            title: "Artists who want to rise above",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Anna Nielsen",
            date: "Apr 15, 2022",
            readTime: "10 Min",
            category: "street art",
        },
        {
            id: 10,
            image: "/articles/article10.jpg",
            title: "Secret garden",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Anna Nielsen",
            date: "Feb 18, 2022",
            readTime: "20 Min",
            category: "art",
        },
        {
            id: 11,
            image: "/articles/article11.jpg",
            title: "Getting real",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Jakob Grønberg",
            date: "Jan 1, 2022",
            readTime: "30 Min",
            category: "art",
        },
        {
            id: 12,
            image: "/articles/article12.jpg",
            title: "Colorful places",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "jane cooper",
            date: "Nov 19, 2021",
            readTime: "15 Min",
            category: "street art",
        },
        {
            id: 13,
            image: "/articles/article13.jpg",
            title: "Keep on smiling",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Louise Jensen",
            date: "Oct 28, 2021",
            readTime: "20 Min",
            category: "street art",
        },
        {
            id: 14,
            image: "/articles/article14.jpg",
            title: "History of paper",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Cristofer Vaccaro",
            date: "Oct 3, 2021",
            readTime: "35 Min",
            category: "art",
        },
        {
            id: 15,
            image: "/articles/article15.jpg",
            title: "How are you, really?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Anna Nielsen",
            date: "Sep 1, 2021",
            readTime: "15 Min",
            category: "Sculptures",
        },
        {
            id: 16,
            image: "/articles/article16.jpg",
            title: "Beauty of colors",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Louise Jensen",
            date: "Aug 25, 2021",
            readTime: "10 Min",
            category: "art",
        },
        {
            id: 17,
            image: "/articles/article17.jpg",
            title: "The future is colorful",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Anne Henry",
            date: "Sep 1, 2021",
            readTime: "30 Min",
            category: "art",
        },
        {
            id: 18,
            image: "/articles/article18.jpg",
            title: "Only in your heart",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Jakob Grønberg",
            date: "June 16, 2021",
            readTime: "10 Min",
            category: "Sculptures",
        },
    ]);
    const [popularPosts, setPopularPosts] = useState([
        {
            id: 1,
            image: "/articles/article1.jpg",
            title: "Hope dies last",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Anne Henry",
            date: "Mar 28, 2022",
            readTime: "10 Min",
            category: "Art",
        },
        {
            id: 2,
            image: "/articles/article5.jpg",
            title: "Street art festival",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Cristofer Vaccaro",
            date: "Mar 28, 2022",
            readTime: "5 Min",
            category: "Street Art",
        },
        {
            id: 3,
            image: "/articles/article2.jpg",
            title: "The best art museums",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            author: "Louise Jensen",
            date: "Mar 28, 2022",
            readTime: "10 Min",
            category: "Sculptures",
        },
    ]);

    return (
        <ArticlesContext.Provider value={{ articles, popularPosts }}>
            {children}
        </ArticlesContext.Provider>
    );
};

export const useArticles = () => {
    const context = useContext(ArticlesContext);
    if (!context) {
        throw new Error("useArticles must be used within an ArticlesProvider");
    }
    return context;
};

