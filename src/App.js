import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
//import Navbar from './pages/Navbar';
import client from './services/Client';
import studentClient from './services/StudentClient';

import PrivateRoute from './Auth/PrivateRoute';

import NavbarTop from './pages/NavbarTop/NavbarTop';
import NavbarBottom from './pages/NavbarBottom/NavbarBottom';

import Path from './pages/Path/Path';
import Dashboard from './pages/Dashboard/Dashboard';
import Course from './pages/Course/Course';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Community from './pages/Community/Community';
import Discuss from './pages/Discuss/Discuss';
import ExerciseV3 from './pages/Train/components/ExerciseV3/ExerciseV3';
import Progressbar from './pages/Progressbar/Progressbar';
import Quizz from './pages/Quizz/Quizz';
import Learning from './pages/Learning/Learning';
import Lesson from './pages/Lesson/Lesson';
import VideoLesson from './pages/VideoLesson/VideoLesson';
import Comment from './pages/Comment/Comment';
import OtherCodeEditor from './pages/Train/components/ExerciseV2/ExerciseV2';
import TableauDeBord from './pages/TableauDeBord/TableauDeBord';
import Catalog from './pages/Catalog/Catalog';
import Code from './pages/Code/Code';
import Signin from './pages/Signin/Signin';
import Train from './pages/Train/Train';
import WebCodeEditor from './pages/WebCodeEditor/WebCodeEditor';
import WebCodeEditorApp from './pages/WebCodeEditorApp/WebCodeEditorApp';
import CodeEditor from './pages/CodeEditor/CodeEditor';
import NotFound from './pages/NotFound/NotFound';
import NewWebCode from './pages/NewWebCode/NewWebCode';
import NewCode from './pages/NewCode/NewCode';
import EditWebCode from './pages/EditWebCode/EditWebCode';
import EditCode from './pages/EditCode/EditCode';
import ShowWebCode from './pages/ShowWebCode/ShowWebCode';
import ShowCode from './pages/ShowCode/ShowCode';

import TestQM from './pages/TestQM/TestQM';
import SubscriptionPayment from './pages/SubscriptionPayment/SubscriptionPayment';
import StackPayment from './pages/StackPayment/StackPayment';
import ModulePayment from './pages/ModulePayment/ModulePayment';

import LessonComment from './pages/LessonComment/LessonComment';
import VideoLessonComment from './pages/VideoLessonComment/VideoLessonComment';
import QuizzComment from './pages/QuizzComment/QuizzComment';
import TrainComment from './pages/TrainComment/TrainComment';
import CodeComment from './pages/CodeComment/CodeComment';

import Stack from "./pages/Stack/Stack";
import ProfileSTudent from './pages/ProfileStudent/ProfileStudent';
import Confirmation from './pages/Confirmation/Confirmation';

import ResetPassword from './pages/ResetPassword/ResetPassword';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import PathSubscription from './pages/PathSubscription/PathSubscription';
import './App.css';

function App() {
  const currentUser = sessionStorage.getItem('currentUser');
  if (currentUser) {
    return (
      <ApolloProvider client={studentClient}>
        <BrowserRouter>
            <NavbarTop />
            
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard} />
              <PrivateRoute exact path='/path/:id' component={Path} />
              <PrivateRoute exact path='/learning/:id' component={Learning}/>
              <PrivateRoute exact path='/course/:course_id/video_lesson/:lesson_video_id' component={VideoLesson} />
              <PrivateRoute exact path='/course/:course_id/lesson/:lesson_id' component={Lesson} />
              <PrivateRoute exact path='/course/:course_id/lesson/:lesson_id/quizz' component={Quizz}/>
              <PrivateRoute exact path='/course/:course_id/lesson/:lesson_id/train' component={Train} />
              <PrivateRoute exact path='/exercise-v3/:id' component={ExerciseV3} />
              <PrivateRoute exact path='/course' component={Course} />
              <PrivateRoute exact path='/progressbar' component={Progressbar}/>
              <PrivateRoute exact path='/community' component={Community}/>
              <PrivateRoute exact path='/discuss' component={Discuss}/>
              <PrivateRoute exact path='/othercodeeditor' component={OtherCodeEditor} />
              <PrivateRoute exact path='/comment' component={Comment} />
              <PrivateRoute exact path='/tableaudebord' component={TableauDeBord} />
              <PrivateRoute exact path='/catalogue' component={Catalog} />
              <PrivateRoute exact path='/code' component={Code} />
              <PrivateRoute exact path='/codeeditor' component={CodeEditor} />
              <PrivateRoute exact path='/webcodeeditor' component={WebCodeEditor} />
              <PrivateRoute exact path='/profileStudent' component={ProfileSTudent} />
              <Route exact path='/webcodeeditorapp' component={WebCodeEditorApp} />
              <Route exact path='/signin' component={Signin} />
              <Route exact path='/testqm' component={TestQM} />
              <Route exact path='/new_web_code' component={NewWebCode} />
              <Route exact path='/new_code/:language' component={NewCode} />
              <Route exact path='/edit_web_code/:id' component={EditWebCode} />
              <Route exact path='/edit_code/:language/:id' component={EditCode} />
              <Route exact path='/web_code/:id' component={ShowWebCode} />
              <Route exact path='/code/:language/:id' component={ShowCode} />
              <Route exact path='/subscription-payment' component={SubscriptionPayment} />
              <Route exact path='/stack-payment/:pathId' component={StackPayment} />
              <PrivateRoute exact path='/module-payment/:learningId' component={ModulePayment} />

              <Route exact path='/lesson/:lessonId/comments' component={LessonComment} />
              <Route exact path='/video-lesson/:lessonVideoId/comments' component={VideoLessonComment} />
              <Route exact path='/lesson/:lessonId/quizz-comments' component={QuizzComment} />
              <Route exact path='/exercise/:exerciseId/comments' component={TrainComment} />
              <Route exact path='/code-comment/:codeId/comments' component={CodeComment} />

              <Route exact path='/stack/:id' component={Stack} />
              <PrivateRoute exact path='/profileStudent' component={ProfileSTudent} />
              <Route exact path='/confirmation' component={Confirmation} />
              <Route exact path='/subscription_path' component={PathSubscription}/>

              <Route component={NotFound} />
            </Switch>
            <NavbarBottom />
        </BrowserRouter>
      </ApolloProvider>
    );
  }
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <NavbarTop />

        <Switch>
          <PrivateRoute exact path='/' component={Dashboard} />
          <Route exact path='/path/:id' component={Path} />
          <Route exact path='/course' component={Course} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/progressbar' component={Progressbar} />
          <PrivateRoute exact path='/community' component={Community} />
          <Route exact path='/discuss' component={Discuss} />
          <Route exact path='/othercodeeditor' component={OtherCodeEditor} />
          <Route exact path='/comment' component={Comment} />
          <Route exact path='/tableaudebord' component={TableauDeBord} />
          <PrivateRoute exact path='/code' component={Code} />
          <Route exact path='/signin' component={Signin} />
          <PrivateRoute
            exact
            path='/subscription-payment'
            component={SubscriptionPayment}
          />
          <PrivateRoute exact path='/stack-payment' component={StackPayment} />
          <PrivateRoute exact path='/module-payment' component={ModulePayment} />

          <Route
            exact
            path='/lesson/:lessonId/comments'
            component={LessonComment}
          />
          <Route
            exact
            path='/video-lesson/:lessonVideoId/comments'
            component={VideoLessonComment}
          />
          <Route
            exact
            path='/lesson/:lessonId/quizz-comments'
            component={QuizzComment}
          />
          <Route
            exact
            path='/exercise/:exerciseId/comments'
            component={TrainComment}
          />
          <Route exact path='/code/:codeId/comments' component={CodeComment} />
          <Route exact path='/confirmation' component={Confirmation} />
          <Route exact path='/stack/:id' component={Stack} />
          {/* <Route exact path='/module/catalogs' component={Stack} /> */}
          <Route exact path='/password-reset' component={ResetPassword} />
          <Route exact path='/password-change' component={ChangePassword} />
          <Route exact path='/catalogue' component={Catalog} />
          <Route exact path='/subscription_path' component={PathSubscription}/>
          <Route component={NotFound} />
        </Switch>

        <NavbarBottom />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
