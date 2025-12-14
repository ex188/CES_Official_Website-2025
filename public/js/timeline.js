/*
 * Manages the Past Events Timeline
 * ---------------------------------
 * HOW TO USE:
 * To add, edit, or remove an event, just modify the 'eventsData' list below.
 * - date: The date of the event (string).
 * - title: The event title (string).
 * - description: A short description (string).
 * - link: (Optional) A URL to a blog post, gallery, or signup.
 *
 * The code will automatically build the timeline AND the year navigation.
 */

$(document).ready(function () {
    const eventsData = [
        {
            date: "Nov 13, 2025",
            title: "从简历到终面：Biotech 面试全流程拆解",
            description:
                "A session explaining Biotech roles and how to present research effectively in interviews.",
            link: "https://mp.weixin.qq.com/s/gYfr3qZv7fEBWsNWaZITsA",
        },
        {
            date: "Nov 3, 2025",
            title: "Salk Institute Lab Tour",
            description:
                "A guided tour offering students an inside look at Salk Institute’s research and history.",
            link: "https://mp.weixin.qq.com/s/JzZQhLPeEbZ7eNjQDLO2AA",
        },
        {
            date: "Oct 13–19, 2025",
            title: "简历指南 + Resume Critique 一对一点评活动",
            description:
                "A workshop and one-on-one critique session to help students craft stronger STEM resumes.",
            link: "https://mp.weixin.qq.com/s/CrShQtR5q-cVsQY15lS9RQ",
        },
        {
            date: "Oct 8 & 10, 2025",
            title: "CES GBM & La Jolla Shores 篝火派对",
            description:
                "An informational meeting and beach bonfire party for CES members and alumni networking.",
            link: "https://mp.weixin.qq.com/s/RXehO1XRhVLaGcFbV3n3UQ",
        },
        {
            date: "Oct 4, 2025",
            title: "Dine with Senior 活动",
            description:
                "An interactive dinner where students can ask seniors about academics, careers, and campus life.",
            link: "https://mp.weixin.qq.com/s/Uqthz1nbJj2-BzeGGqx4Mw",
        },
        {
            date: "May 24, 2025",
            title: "CES 年度盛典 & 毕业酒会",
            description:
                "CES annual celebration with performances, games, food, and alumni networking.",
            link: "https://mp.weixin.qq.com/s/cqoctCdwA5yFGv0MUjrvPw",
        },
        {
            date: "May 22, 2025",
            title: "学术之路分享会：Meet with PhD",
            description:
                "A PhD panel sharing academic paths and guidance for students exploring research careers.",
            link: "https://mp.weixin.qq.com/s/ia3AxfDZXp3A5BC_aD0wmA",
        },
        {
            date: "May 18, 2025",
            title: "Intern Mixer 4.0",
            description:
                "A networking event connecting students with peers, alumni, and internship opportunities.",
            link: "https://mp.weixin.qq.com/s/ag6xUQ1InawlggxEn9-05w",
        },
        {
            date: "May 2, 2025",
            title: "行业聚焦：核聚变 · Fusion Energy",
            description:
                "A talk exploring fusion energy research, technology challenges, and industry insights.",
            link: "https://mp.weixin.qq.com/s/W9ZObjFagxUungYDxs8q9g",
        },
        {
            date: "Apr 25, 2025",
            title: "行业聚焦：医美 · Medical Aesthetics",
            description:
                "A session exploring medical aesthetics careers, technologies, and industry insights.",
            link: "https://mp.weixin.qq.com/s/_ITP1KFKp0cUvz0GREiWKA",
        },
        {
            date: "Apr 11, 2025",
            title: "CES GBM & La Jolla Shores 篝火派对",
            description:
                "An informational meeting and beach bonfire for CES members, alumni, and networking.",
            link: "https://mp.weixin.qq.com/s/knFUnWTy7UbJAR6B6q8fMg",
        },
        {
            date: "Feb 21, 2025",
            title: "【Frontier Reads】 前沿共读：解读分享科研论文，带你了解每个专业都在做什么",
            description:
                "A reading group discussing research on accelerating large language models using linear attention.",
            link: "https://mp.weixin.qq.com/s/vknE1i_w_1M-qB39xgd2KQ",
        },
        {
            date: "Feb 10, 2025",
            title: "CES 新系列活动----每月带你走近一个行业，获取行业内部信息！第一篇：宝石学（地球科学）",
            description:
                "A session introducing geosciences and gemology, including research directions and gem evaluation.",
            link: "https.mp.weixin.qq.com/s/DYOk6tox5I2vVtnmCtiC7g",
        },
        {
            date: "Jan 10, 2025",
            title: "和OrinTech一起，教你如何在UCSD引领创新",
            description:
                "An introduction to OrinTech projects offering hands-on experience and skill development.",
            link: "httpsS://mp.weixin.qq.com/s/WpgCul0hIHoyTvycCq19IA",
        },
        {
            date: "Jan 18, 2025",
            title: "Dine With Senior 一顿饭的时间解决新生所有困惑",
            description:
                "An interactive dinner where seniors answer questions on academics, social life, and careers.",
            link: "https.mp.weixin.qq.com/s/AMfSF1phTyxiNA5Rw3pnSQ",
        },
        {
            date: "Nov 12, 2024",
            title: "在UCSD转专业你需要知道什么？",
            description:
                "A seminar guiding students on major transfer processes, requirements, and experiences.",
            link: "https://mp.weixin.qq.com/s/4ibPtohds4NODDc8AfHEJg",
        },
        {
            date: "Oct 11 & Oct 25, 2024",
            title: "CES篝火派对与General Body Meeting邀请函",
            description:
                "Join CES for a bonfire party and GBM with networking, food, and fun activities.",
            link: "https://mp.weixin.qq.com/s/zrosyYVmUaQyZw0wOHqwAg",
        },
        {
            date: "Sep 30 - Oct 6, 2024",
            title: "Resume Critics/Mock Interview",
            description:
                "Boost your resume and interview skills before the UCSD Career Fair with personalized guidance from experienced PhD students and industry professionals.",
            link: "https://mp.weixin.qq.com/s/Zpn0hkljp9_spD4U5kAvsA",
        },
        {
            date: "July 8, 2024",
            title: "再回首·Lab Tour @ Salk Institute",
            description: "Tour to Salk Institute",
            link: "https://mp.weixin.qq.com/s/cIOOGYWRsfVH9-HeLfVgKA",
        },
        {
            date: "Jun 15, 2024",
            title: "CES年度盛典期待您的到来！",
            description:
                "Celebrate CES annual gala with performances, food, games, and networking.",
            link: "https://mp.weixin.qq.com/s/vouLy0XV5q5UOKdPBLLTyA",
        },
        {
            date: "May 13, 2024",
            title: "来听UCSD正教授分享GPA以外你还需要做的事！",
            description:
                "Learn essential soft skills beyond GPA from Professor Feng.",
            link: "https://mp.weixin.qq.com/s/cF2kBDxcXumU4y2uUgdqqQ",
        },
        {
            date: "May 12, 2024",
            title: "Intern Mixer 3.0 开启！你离internship距离就差这一步！",
            description:
                "Network, share experiences, and prepare for internships.",
            link: "https://mp.weixin.qq.com/s/IXhYK0s_NMIwiTwPsJMWfQ",
        },
        {
            date: "April 21, 2024",
            title: "CES篝火派对活动回顾",
            description:
                "Recap of CES bonfire party with food, fun, and networking.",
            link: "https://mp.weixin.qq.com/s/N2QYrnJUJTB6JWj0F7sZvQ",
        },
        {
            date: "Feb 20, 2024",
            title: "Grad Panel",
            description:
                "Grad students share application tips and career insights.",
            link: "https://mp.weixin.qq.com/s/aFNnPCpPZErPw8fQ-E1JVg",
        },
        {
            date: "Spring 2024",
            title: "Grad Panel: Bioengineering",
            description:
                "A series of grad panels targeting bioengineering majors.",
            link: "https://mp.weixin.qq.com/s/JrkgdQb93iz2iNpgDLh76w",
        },
        {
            date: "Spring 2024",
            title: "Grad Panel: Computer Science",
            description:
                "Learn from recent graduates and professors on how to develop a strong grad school application.",
            link: "https://mp.weixin.qq.com/s/RvNL9pLb01jZsDFG_9MWpQ",
        },
        {
            date: "Winter 2024",
            title: "GRE Workshop",
            description:
                "Wondering what is GRE and how should you prepare for it? Here are some advices from a history major student.",
            link: "https://mp.weixin.qq.com/s/F03OnT4tQCU1bU0-C8KC9g",
        },
        {
            date: "Winter 2024",
            title: "Career Development Symposium",
            description:
                "A career development event targeting DSC and CSE majors.",
            link: "https://mp.weixin.qq.com/s/F03OnT4tQCU1bU0-C8KC9g",
        },
        {
            date: "Nov 9, 2023",
            title: "活动｜想要和教授1v1的联系吗？",
            description:
                "ECE professor shares research and answers student questions.",
            link: "https://mp.weixin.qq.com/s/QZ9v49MOVfvp-p9whLwAXQ",
        },
        {
            date: "Oct 10 & Oct 13, 2023",
            title: "GBM & 篝火晚会",
            description:
                "CES online GBM and beach bonfire event with rideshare.",
            link: "https://mp.weixin.qq.com/s/ggq2-3ACUR3_m8Du5op_Zg",
        },
        {
            date: "Fall 2023",
            title: "Professional Profile Building",
            description:
                "A resume critique and interview prep event open to all international students.",
            link: "httpss://docs.google.com/forms/d/e/1FAIpQLSdX8bym3d-OvjB3TxbcAIJUGuVtMbeHRzupbgcqTb7SjibYHA/viewform?usp=sf_link",
        },
        {
            date: "Fall 2023",
            title: "Grad School Application Roundtables",
            description:
                "Some of the most accomplished UCSD alumni share their stories on graduate school application.",
            link: null,
        },
        {
            date: "Spring 2023",
            title: "Alumni Networking Night",
            description:
                "Connected current students with CES alumni working at top tech and biotech companies.",
            link: null,
        },
        {
            date: "Winter 2023",
            title: "Internship Panel",
            description:
                "Students shared their internship experiences from Google, Amazon, and local startups.",
            link: null,
        },
    ];

    const getYearFromDate = (dateString) => {
        if (!dateString) return null;
        const year = dateString.match(/(\d{4})/);
        if (year) return year[0];
        const parts = dateString.split(" ");
        const lastPart = parts[parts.length - 1];
        if (!isNaN(lastPart)) return lastPart;
        return null;
    };

    const $timelineContainer = $("#timeline-container");
    const $navContainer = $("#timeline-nav-container");
    const $countContainer = $("#timeline-event-count");

    if (!$timelineContainer.length) {
        console.error("Timeline container not found.");
        return;
    }

    $timelineContainer.empty();
    $navContainer.empty();

    if (eventsData.length === 0) {
        $timelineContainer.append(
            "<p>No past events to display at this time.</p>"
        );
        return;
    }

    const totalEvents = eventsData.length;
    if ($countContainer.length) {
        $countContainer.text(`Total Events: ${totalEvents}`);
    }

    const years = [
        ...new Set(eventsData.map((event) => getYearFromDate(event.date))),
    ];

    years.forEach((year) => {
        if (year) {
            const buttonHTML = `<a href="#timeline-year-${year}" class="btn timeline-year-btn" data-year="${year}">${year}</a>`;
            $navContainer.append(buttonHTML);
        }
    });

    let currentYear = null;
    eventsData.forEach((event, index) => {
        const readMoreButton = event.link
            ? `<a href="${event.link}" target="_blank" class="btn btn-primary btn-sm">Read More</a>`
            : "";

        const eventYear = getYearFromDate(event.date);
        let yearId = "";
        if (eventYear && eventYear !== currentYear) {
            currentYear = eventYear;
            yearId = `id="timeline-year-${currentYear}"`;
        }

        const timelineItemHTML = `
      <div class="timeline-item" ${yearId} data-aos="fade-up" data-aos-delay="${
            (index % 5) * 50
        }" data-aos-duration="600" data-aos-once="true">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-date">${event.date}</div>
          <h3>${event.title}</h3>
          <p>${event.description}</p>
          ${readMoreButton}
        </div>
      </div>
    `;
        $timelineContainer.append(timelineItemHTML);
    });

    let isScrolling = false;

    $navContainer.on("click", ".timeline-year-btn", function (e) {
        e.preventDefault();
        const year = $(this).data("year");
        const targetId = "#timeline-year-" + year;
        const $targetElement = $(targetId);

        $navContainer.find(".timeline-year-btn").removeClass("active");
        $(this).addClass("active");

        if ($targetElement.length) {
            isScrolling = true;

            const offsetTop = $targetElement.offset().top - 100;

            $("html, body")
                .stop()
                .animate(
                    {
                        scrollTop: offsetTop,
                    },
                    500,
                    "swing",
                    function () {
                        isScrolling = false;
                    }
                );
        }
    });

    $(window).on("load", function () {
        const $navButtons = $navContainer.find(".timeline-year-btn");
        const yearElements = years
            .map((year) => {
                const el = $(`#timeline-year-${year}`);
                if (el.length) {
                    return { year: year, offset: el.offset().top - 150 };
                }
                return null;
            })
            .filter((el) => el !== null);

        $(window).on("scroll", function () {
            if (isScrolling) {
                return;
            }

            const scrollPos = $(window).scrollTop();

            let activeYear = null;
            for (let i = 0; i < yearElements.length; i++) {
                if (scrollPos >= yearElements[i].offset) {
                    activeYear = yearElements[i].year;
                }
            }

            if (activeYear === null && yearElements.length > 0) {
                activeYear = yearElements[0].year;
            }

            $navButtons.removeClass("active");
            if (activeYear) {
                $navButtons
                    .filter(`[data-year="${activeYear}"]`)
                    .addClass("active");
            }
        });

        $(window).trigger("scroll");
    });

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 600,
            once: true,
        });
    } else {
        console.warn("AOS library not found. Animations will not work.");
    }
});
