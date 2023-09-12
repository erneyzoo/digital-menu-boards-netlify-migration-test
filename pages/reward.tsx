// node_modules
import type { NextPage } from 'next'; // Vendor
import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import Layout from '../vendor/components/layout/Layout';
import View from '../vendor/components/layout/View';
import { bootstrapClass } from '../vendor/utils/code-helper';
import { getImagePath } from '../vendor/utils/files-helper';
import { Colours } from '../src/styles/colours';
import {
  MemberReward,
  MemberRewardPayload,
  useMemberRewardMutation,
} from '../src/types/_generated_';
import { getMicroSiteId } from '../vendor/utils/app-api';
import PresentationView from '../src/components/PresentationView';
import LoadingScreenView from '../vendor/components/ui/loading/LoadingScreenView';
import ErrorView from '../src/components/ErrorView';
import RewardView from '../src/components/RewardView';
import RewardBackground from '../src/components/RewardBackground';

const classNames = {
  header: bootstrapClass(['py-2', 'border-bottom', 'bg-dark']),
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

const AppRewardPage: NextPage = props => {
  const { msToken } = props as { msToken: string | undefined };
  const [memberReward, setMemberReward] = useState<MemberReward | undefined>();
  const [requestErrors, setRequestErrors] = useState<string[]>(
    msToken ? [] : ['MicroSite Token Missing'],
  );
  const [prizeId, setPrizeId] = useState('146');
  const [memberRewardMutation, { loading }] = useMemberRewardMutation({
    variables: {
      microSiteId: getMicroSiteId().toString(),
    },
  });

  const onSubmitHandler = useCallback(async () => {
    if (prizeId.length === 0) {
      alert('ENTER A PRIZE ID');
      return;
    }

    try {
      const response = await memberRewardMutation();
      if (response.errors) {
        setRequestErrors(response.errors.map(e => e.message));
        return;
      }

      const { success, message, reward } = response.data
        ?.createMemberReward as MemberRewardPayload;

      if (success && reward) {
        setMemberReward(reward);
      }

      if (!success && message) {
        setRequestErrors([message]);
      }
    } catch (e) {
      setRequestErrors([JSON.stringify(e)]);
    }
  }, [prizeId, memberRewardMutation]);

  const background = memberReward ? <RewardBackground /> : undefined;

  return (
    <Layout
      title="Member Reward"
      header={<Header />}
      background={background}
      backgroundColor={Colours.light}
      textColor={Colours.dark}>
      {msToken && loading && (
        <LoadingScreenView
          message="Creating Reward"
          spinnerColor={Colours.dark}
        />
      )}
      {!memberReward && msToken && !loading && requestErrors.length === 0 && (
        <PresentationView
          onSubmit={onSubmitHandler}
          prizeId={prizeId}
          setPrizeId={setPrizeId}
        />
      )}

      {memberReward && <RewardView {...memberReward} />}

      {requestErrors.map(error => (
        <ErrorView key={Math.random() * 7} message={error} />
      ))}
    </Layout>
  );
};
export default AppRewardPage;
