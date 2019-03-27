import Home from './pages/Home';

import BlankLayout from './layouts/BlankLayout';
import Login from './pages/Login';

import HeaderAsideFooterResponsiveLayout from './layouts/HeaderAsideFooterResponsiveLayout';

import NotFound from './pages/NotFound';
import EntityProperties from './pages/Properties';
import UserProperties from './pages/Properties/components/userProperties/UserProperties';
import RoleProperties from './pages/Properties/components/RoleProperties';
import GeneratorRuleProperties from './pages/Properties/components/GeneratorRuleProperties';
import MaterialStatusModelProperties from './pages/Properties/components/MaterialStatusModelProperties';
import MaterialProperties from './pages/Properties/components/MaterialProperties';
import MaterialLotProperties from './pages/Properties/components/MaterialLotProperties';
import MaterialLotInventoryProperties from './pages/Properties/components/MaterialLotInventoryProperties';

const routerConfig = [
  {
    path: '/',
    layout: BlankLayout,
    component: Login,
  },
  {
    path: '/Home',
    layout: HeaderAsideFooterResponsiveLayout,
    component: Home,
  },
  {
    path: 'System/OnlineTableManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: 'System/OnlineTabManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: 'System/OnlineFieldManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: 'System/OnlineRefTableManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: 'System/SysRefNameManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: 'System/OrgRefNameManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: 'System/MessageManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },

  {
    path: 'Security/UserManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: UserProperties,
  },
  {
    path: 'Security/RoleManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: RoleProperties,
  },

  //LMS
  {
    path: 'LMS/IDGeneratorRuleManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: GeneratorRuleProperties,
  },
  
  //MMS
  {
    path: '/MMS/StatusModelManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: MaterialStatusModelProperties,
  },
  {
    path: '/MMS/StatusCategoryManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: '/MMS/StatusManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: '/MMS/EventManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: '/MMS/RawMaterialManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: MaterialProperties,
  },
  {
    path: '/MMS/MaterialLotManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: MaterialLotProperties,
  },

  {
    path: '/WMS/WarehouseManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: '/WMS/MLotInventoryManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: MaterialLotInventoryProperties,
  },
  //RMS
  {
    path: 'Rms/EquipmentManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: 'Rms/RecipeManager/:tableRrn',
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: '*',
    layout: HeaderAsideFooterResponsiveLayout,
    component: NotFound,
  },
];

export default routerConfig;
