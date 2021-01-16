import Vue from 'vue';
import {
  Layout,
  Button,
  Slider,
  Icon,
  Menu,
  FormModel,
  Input,
  Table,
  Tag,
  Modal,
  message,
  Row,
  Col
} from 'ant-design-vue';

const { Header, Footer, Content, Sider } = Layout;
const { ItemGroup } = Menu;
const { confirm } = Modal;

Vue.prototype.$message = message;
Vue.prototype.$confirm = confirm;

Vue.use(Layout)
  .use(Slider)
  .use(Header)
  .use(Footer)
  .use(Sider)
  .use(Content)
  .use(Button)
  .use(Icon)
  .use(Menu)
  .use(ItemGroup)
  .use(FormModel)
  .use(Input)
  .use(Table)
  .use(Tag)
  .use(Row)
  .use(Col)
  .use(Modal)
