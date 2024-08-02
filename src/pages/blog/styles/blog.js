import styled from "styled-components";
import { colors } from "../../../components/common/element/elements.js"

export const Styles = styled.div`
    .blog-classic-page {
        .blog-classic-area {
            padding : 70px 0;
            .blog-item {
                margin-bottom: 40px;
                &:last-child {
                    margin-bottom : 0;
                }

                .blog-img {
                    a {
                        img {
                            border-radius : 5px;
                            margin-bottom: 30px;
                        }
                    }
                }
                .blog-auth_date {
                    margin-bottom: 12px;
                    .author-img {
                        margin-right : 20px;
                        a {
                            img {
                                max-width: 40px;
                                border-radius: 50%;
                                margin-right: 10px;
                                margin-top: -9px;
                            }
                        }
                        p {
                            a {
                                font-size: 14px;
                                color: ${colors.bg1};
                                font-weight: 500;
                                &:hover {
                                    color: ${colors.black1};
                                }
                            }
                        }

                        @media(max-width: 991px) {
                            margin-right: 10px;
                        }
                    }

                    .post-date,
                    .post-category,
                    .post-comment {
                        margin-right: 20px;
                        p {
                            font-size : 14px;
                            color: ${colors.text2};
                            font-weight: 500;
                            i {
                                font-size : 20px;
                                color: ${colors.bg1};
                                vertical-align: top;
                            }
                        }

                        @media(max-width: 991px) {
                            margin-right: 10px;
                        }
                    }

                    .post-category,
                    .post-comment {
                        @media(max-width: 767px) {
                            display : none;
                        }
                    }
                }

                .blog-title {
                    h5 {
                        a {
                            color: ${colors.black1};
                            line-height: 32px;
                            &:hover {
                                color: ${colors.bg1};
                            }

                            @media(max-width: 991px) {
                                font-size : 18px;
                            }

                            @media(max-width: 575px) {
                                font-size : 15px;
                            }
                        }
                    }
                }
            }

            ul.pagination-box {
                margin-top: 7px;

                @media(max-width: 575px) {
                    margin-bottom: 30px;
                }
            }

            @media(max-width: 767px) {
                padding : 35px 0 30px;
            }

            @media(max-width: 575px) {
                padding-bottom : 0;
            }
        }
    }

    .blog-grid-page {
        .blog-grid-area {
            padding : 70px 0;
            .blog-item {
                border: 1px solid ${colors.border1};
                border-radius: 5px;
                transition: all 0.2s ease;
                margin-bottom: 30px;

                .blog-loader {
                    font-size: 18px;
                    align-items: center;
                }

                .blog-img {
                    a {
                        img {
                            border-radius: 5px 5px 0 0;
                        }
                    }
                }
                .blog-content {
                    padding: 30px 25px 25px;
                    border-radius: 0 0 5px 5px;
                    .blog-auth_date {
                        margin-bottom: 12px;
                        .author-img {
                            margin-right : 20px;
                            a {
                                img {
                                    max-width: 35px;
                                    border-radius: 50%;
                                    margin-right: 8px;
                                    margin-top: -8px;
                                }
                            }
                            p {
                                a {
                                    font-size: 13px;
                                    color: ${colors.bg1};
                                    font-weight: 500;
                                    &:hover {
                                        color: ${colors.black1};
                                    }
                                }
                            }

                            @media(max-width: 767px) {
                                margin-right: 10px;
                            }
                        }

                        .post-date,
                        .post-category {
                            margin-right: 8px;
                            p {
                                font-size : 13px;
                                color: ${colors.text2};
                                font-weight: 500;
                                i {
                                    font-size : 20px;
                                    color: ${colors.bg1};
                                    vertical-align: top;
                                }
                            }
                        }

                        .post-category {
                            margin-right: 0;
                        }
                    }

                    .blog-title {
                        margin-bottom: 10px;
                        h6 {
                            a {
                                color: ${colors.black1};
                                line-height: 25px;
                                &:hover {
                                    color: ${colors.bg1};
                                }

                                @media(max-width: 767px) {
                                    font-size : 15px;
                                }
                            }
                        }
                    }

                    .blog-desc {
                        p {
                            font-size : 14px;
                            color : ${colors.text3};
                            line-height: 25px;
                        }
                    }
                }
                &:hover {
                    box-shadow: 0 12px 25px rgba(0,0,0,0.07);
                }
            }

            ul.pagination-box {
                margin-top: 20px;

                @media(max-width: 575px) {
                    margin-bottom: 30px;
                }
            }

            @media(max-width: 767px) {
                padding: 35px 0 30px;
            }

            @media(max-width: 575px) {
                padding-bottom : 0;
            }
        }
    }
        /* Pagination */
    ul.pagination-box {
    width: 75px;
        margin-top: 20px;
        li {
            margin-right : 15px;
            a {
                font-size: 16px;
                color: ${colors.bg1};
                width: 75px;
                height: 38px;
                border: 1px solid ${colors.border3};
                background-color: #fff;
                display: block;
                padding-top: 7px;
                border-radius: 50%;
                i {

                }
                &:hover {
                    background-color: ${colors.bg1};
                    color: #ffffff;
                    border-color : ${colors.bg1};
                }

                @media(max-width: 575px) {
                    font-size: 14px;
                    width: 30px;
                    height: 30px;
                    padding-top: 4px;
                }
            }
            &:last-child {
                margin-right : 0;
            }
        }
        li.active {
            a {
                background-color: ${colors.bg2};
                color: #fff;
                border-color : ${colors.bg2};
            }
        }

        @media(max-width: 767px) {
            margin-top: 5px;
        }
    }

`;