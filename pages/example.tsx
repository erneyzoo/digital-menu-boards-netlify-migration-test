// node_modules
// Vendor
import React from 'react';
import Image from 'next/image';
import Layout from '../vendor/components/layout/Layout';
import View from '../vendor/components/layout/View';
import {bootstrapClass} from '../vendor/utils/code-helper';
import AppAnimation from '../vendor/components/ui/animation/AppAnimation';
import {getImagePath} from '../vendor/utils/files-helper';
import {Colours} from '../src/styles/colours';

const classNames = {
    header: bootstrapClass(['bg-dark-90', 'text-white', 'py-2']),
    body: {
        container: bootstrapClass(['bg-custom-70', 'rounded-3', 'p-3']),
        fullBlock: bootstrapClass(['bg-warning-85', 'm-1']),
        horizontalBlock: bootstrapClass(['bg-dark-85', 'p-2', 'm-1']),
        verticalBlock: bootstrapClass(['bg-light-90', 'text-dark', 'p-2', 'm-1']),
        h1: bootstrapClass(['p-0', 'text-danger']),
    },
    footer: bootstrapClass(['bg-light-70', 'text-dark', 'p-2']),
};

const styles = {
    innerShadow: {
        boxShadow: 'inset 0 0 10px #282828',
    },
};

const Header: React.FC = () => (
    <View className={classNames.header}>
        <Image
            src={getImagePath('boostLogo.svg')}
            width={100}
            height={45}
            alt="Example"
        />
    </View>
);
const Background: React.FC = () => (
    <View fill style={styles.innerShadow}>
        <AppAnimation folder="fruits"/>
    </View>
);

const Footer = () => (
    <View className={classNames.footer}>
        <h2>footer</h2>
    </View>
);

const ExamplePage = () => {
    const header = () => <Header/>;

    return (
        <Layout
            title="Home"
            header={header}
            backgroundColor={Colours.light}
            textColor="white"
            background={<Background/>}
            footer={<Footer/>}
        >
            <View size={90} className={classNames.body.container}>
                <View fill className={classNames.body.fullBlock}>
                    <h1 className={classNames.body.h1}>Home Page</h1>
                </View>

                <View horizontal className={classNames.body.horizontalBlock}>
                    Horizontal Block
                </View>

                <View vertical className={classNames.body.verticalBlock}>
                    Vertical Block
                </View>
            </View>
        </Layout>
    );
};
export default ExamplePage;
