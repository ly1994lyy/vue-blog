import React from 'react'
import Login from "../pages/Login/Login";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import ArticleList from "../pages/Article/ArticleList";
import Home from "../pages/Home/Home";
import EditArticle from "../pages/Article/EditArticle";
import UserList from "../pages/User/UserList";
import AdminUserList from "../pages/AdminUser/AdminUserList";
import EditAdminUser from "../pages/AdminUser/EditAdminUser";

import {
    UserOutlined,
    TeamOutlined,
    HomeOutlined,
    ReadOutlined,
    BarsOutlined,
    IdcardOutlined,
    LinkedinOutlined,
    FolderViewOutlined
  } from "@ant-design/icons";
import EditCategory from '../pages/Category/EditCategory';
import CategoryList from '../pages/Category/CategoryList';
import OtherList from '../pages/Other/OtherList';
import AboutList from '../pages/About/AboutList';
import EditOther from '../pages/Other/EditOther';
import EditAbout from '../pages/About/EditAbout';
import FriendLinkList from '../pages/FriendLink/FriendLinkList';
import EditFriendLink from '../pages/FriendLink/EditFriendLink';

export const mainRouter = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/404",
    component: PageNotFound
  }
];

export const adminRouter = [
  { path: "/admin", component: Home, exact: true, isShow: true, title: "首页",icon:<HomeOutlined /> },
  {
    path: "/admin/category",
    component: CategoryList,
    isShow: true,
    exact:true,
    title: "分类管理",
    icon:<BarsOutlined />
  },
  { path: "/admin/category/create", component: EditCategory, isShow: false },
  { path: "/admin/category/edit/:id", component: EditCategory, isShow: false },
  {
    path: "/admin/article",
    component: ArticleList,
    isShow: true,
    exact:true,
    title: "文章列表",
    icon:<ReadOutlined />
  },
  { path: "/admin/article/create", component: EditArticle, isShow: false },
  { path: "/admin/article/edit/:id", component: EditArticle, isShow: false },
  {
    path: "/admin/user",
    component: UserList,
    exact:true,
    isShow: true,
    title: "用户列表",
    icon:<TeamOutlined />
  },
  {
    path: "/admin/adminuser",
    component: AdminUserList,
    isShow: true,
    exact:true,
    title: "管理员列表",
    icon:<UserOutlined />
  },
  { path: "/admin/adminuser/create", component: EditAdminUser, isShow: false },
  { path: "/admin/adminuser/edit/:id", component: EditAdminUser, isShow: false },
  {
    path: "/admin/other",
    component: OtherList,
    isShow: true,
    exact:true,
    title: "其他作品",
    icon:<FolderViewOutlined />
  },
  { path: "/admin/other/create", component: EditOther, isShow: false },
  { path: "/admin/other/edit/:id", component: EditOther, isShow: false },
  {
    path: "/admin/about",
    component: AboutList,
    isShow: true,
    exact:true,
    title: "关于作者",
    icon:<IdcardOutlined />
  },
  { path: "/admin/about/create", component: EditAbout, isShow: false },
  { path: "/admin/about/edit/:id", component: EditAbout, isShow: false },
  {
    path: "/admin/friendlink",
    component: FriendLinkList,
    isShow: true,
    exact:true,
    title: "友情链接",
    icon:<LinkedinOutlined />
  },
  { path: "/admin/friendlink/create", component: EditFriendLink, isShow: false },
  { path: "/admin/friendlink/edit/:id", component: EditFriendLink, isShow: false },
];
