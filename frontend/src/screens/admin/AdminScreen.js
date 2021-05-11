import React from "react";
import { Switch } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import "./AdminScreen.css";
import ProtectedRoutes from "../../hoc/ProtectedRoutes";
import { BASEURL } from "../../constants/index";
import AnnouncementScreen from "./announcement/AnnouncementScreen";
import AddAnnouncementScreen from "./announcement/AddAnnouncementScreen";
import EditAnnouncementScreen from "./announcement/EditAnnouncementScreen";
import FormScreen from "./form/FormScreen";
import AddFormScreen from "./form/AddFormScreen";
import EditFormScreen from "./form/EditFormScreen";
import ScholarshipEditorScreen from "./scholarshipEditor/ScholarshipEditorScreen";
import AddScholarshipEditorScreen from "./scholarshipEditor/AddScholarshipEditorScreen";


import EventScreen from "./event/EventScreen";
import AddEventScreen from "./event/AddEventScreen";
import EditEventScreen from "./event/EditEventScreen";

import AboutScreen from "./about/AboutScreen";
import AddAboutScreen from "./about/AddAboutScreen";
const AdminScreen = () => {
  return (
    <div className="bg-gray-100 font-family-karla flex">
      <Sidebar>
        <Switch>
          <ProtectedRoutes
            exact
            path={`${BASEURL}/admin/about`}
            component={AboutScreen}
          />

          <ProtectedRoutes
            exact
            path={`${BASEURL}/admin/about/add`}
            component={AddAboutScreen}
          />

          <ProtectedRoutes
            exact
            path={`${BASEURL}/admin/announcements`}
            component={AnnouncementScreen}
          />

          <ProtectedRoutes
            exact
            path={`${BASEURL}/admin/announcements/add`}
            component={AddAnnouncementScreen}
          />

          <ProtectedRoutes
            exact
            path={`${BASEURL}/admin/announcements/:announcement_id`}
            component={EditAnnouncementScreen}
          />

          <ProtectedRoutes
            exact
            path={`${BASEURL}/admin/forms`}
            component={FormScreen}
          />

          <ProtectedRoutes
            exact
            path={`${BASEURL}/admin/forms/add`}
            component={AddFormScreen}
          />

          <ProtectedRoutes
            exact
            path={`${BASEURL}/admin/forms/:form_id`}
            component={EditFormScreen}
          />

          <ProtectedRoutes
            exact
            path={`${BASEURL}/admin/events`}
            component={EventScreen}
          />

          <ProtectedRoutes
            exact
            path={`${BASEURL}/admin/events/add`}
            component={AddEventScreen}
          />

          <ProtectedRoutes
            exact
            path={`${BASEURL}/admin/events/:event_id`}
            component={EditEventScreen}
          />

          <ProtectedRoutes
            exact
            path={`${BASEURL}/admin/scholarshipEditor`}
            component={ScholarshipEditorScreen}
          />

          <ProtectedRoutes
            exact
            path={`${BASEURL}/admin/scholarshipEditor/add`}
            component={AddScholarshipEditorScreen}
          />
        </Switch>
      </Sidebar>
    </div>
  );
};

export default AdminScreen;
