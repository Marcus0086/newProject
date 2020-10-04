import React from 'react';
import HeroPage from '../components/hero';
import ContentPage from '../components/content.jsx';

function AboutPage(props) {
    return (
        <div>
            <HeroPage title={props.title} />
            <ContentPage>
                <p>
                Lorem ipsum magna consequat elit adipisicing deserunt est est sed ut dolor exercitation cillum esse in id culpa occaecat exercitation nostrud in esse amet voluptate ea dolore in incididunt voluptate commodo commodo non duis non exercitation pariatur adipisicing ex elit est cillum in fugiat in adipisicing aliqua laboris voluptate nulla est excepteur occaecat consequat aliquip ut excepteur laborum do minim pariatur deserunt voluptate et aliquip adipisicing et dolor adipisicing aliqua aute esse fugiat sunt dolore in non tempor proident pariatur fugiat ad excepteur ut in ut officia incididunt ut quis nulla non voluptate excepteur aliqua adipisicing adipisicing duis nostrud adipisicing dolore occaecat duis ad ut in non aliqua et culpa ad eu est consequat labore sunt aliqua in dolore id consequat dolor pariatur et esse consectetur sed proident ea voluptate sed proident duis irure deserunt velit proident qui officia enim ex dolor proident commodo sunt voluptate ut qui excepteur culpa minim dolore consequat dolore exercitation enim incididunt ea aliquip velit veniam mollit pariatur exercitation deserunt id nulla occaecat in tempor deserunt est dolore id magna qui laborum nisi aliquip minim deserunt dolor exercitation sint ut culpa consectetur veniam proident non cillum minim sint velit mollit enim amet cillum sint nulla ex magna nostrud ea proident fugiat consequat eiusmod dolore eu pariatur quis ex cupidatat ut est nulla minim aliquip commodo.
                </p>
            </ContentPage>
        </div>
    );
}

export default AboutPage;