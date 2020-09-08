import Vue from "vue";
import {
  Button,
  Form,
  FormItem,
  Input,
  Container,
  Aside,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Main,
  Header,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn,
  Footer,
  Popconfirm,
  Dialog,
  Message,
} from "element-ui";

Vue.use(Button)
  .use(Form)
  .use(FormItem)
  .use(Container)
  .use(Aside)
  .use(Menu)
  .use(Submenu)
  .use(MenuItemGroup)
  .use(MenuItem)
  .use(Input)
  .use(Main)
  .use(Header)
  .use(Dropdown)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Table)
  .use(TableColumn)
  .use(Footer)
  .use(Popconfirm)
  .use(Dialog);


Vue.prototype.$message = Message