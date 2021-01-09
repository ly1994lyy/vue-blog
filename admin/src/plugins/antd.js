import Vue from 'vue'
import { Layout, Button,Slider, Icon, Menu, FormModel, Input } from 'ant-design-vue'

const { Header, Footer, Content, Sider } = Layout
const { ItemGroup } = Menu

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