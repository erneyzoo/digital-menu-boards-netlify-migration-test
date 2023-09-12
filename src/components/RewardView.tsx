import React, {useCallback} from 'react';
import {bootstrapClass} from '../../vendor/utils/code-helper';
import {MemberReward} from '../types/_generated_';
import View from '../../vendor/components/layout/View';
import AppImage from '../../vendor/components/ui/AppImage';
import FAIcon from '../../vendor/components/ui/FAIcon';
import {sendMessageToApp} from '../../vendor/utils/app-channel'; // bootstrap Classes compiler

// bootstrap Classes compiler
const classNames = {
  card: bootstrapClass(['card', 'bg-dark-90', 'rounded-4', 'overflow-hidden']),
  image: bootstrapClass(['card-img']),
  title: bootstrapClass(['card-header', 'card-title', 'bg-light-95']),
  description: bootstrapClass(['card-body']),
  descriptionBox: bootstrapClass([
    'bg-warning',
    'bg-gradient',
    'card-title',
    'px-5',
    'py-3',
    'rounded',
    'text-dark',
    'fw-bolder',
  ]),
  footer: bootstrapClass(['card-footer', 'px-1', 'pb-3', 'bg-light-95']),
  btn: bootstrapClass(['btn', 'btn-success', 'w-75']),
};

const RewardView: React.FC<MemberReward> = ({
  title,
  imageUrl,
  description,
}) => {
  const onCloseSiteClick = useCallback(() => {
    sendMessageToApp('app:close');
  }, []);

  return (
    <View size={90}>
      <View fill className={classNames.card}>
        <View horizontal className={classNames.title}>
          <h1>YOU HAVE WON</h1>
        </View>
        {imageUrl && (
          <View horizontal className="bg-dark m-0">
            <AppImage
              src={imageUrl}
              alt="Member Reward"
              initialSize={{
                width: 0,
                height: 300,
              }}
              priority
              isLocal={false}
            />
          </View>
        )}
        <View className={classNames.description}>
          <View className={classNames.descriptionBox}>
            <h3 className="text-light fw-bolder border-bottom border-black-10 px-3 pb-2">
              {title}
            </h3>
            <span>{description}</span>
          </View>
        </View>
        <View horizontal className={classNames.footer}>
          <button
            type="button"
            className={classNames.btn}
            onClick={onCloseSiteClick}>
            <FAIcon icon="award" color="light" size={18} />
            <span className="mx-3 fw-bolder">Well Done</span>
            <FAIcon icon="face-laugh-wink" color="light" size={18} />
          </button>
        </View>
      </View>
    </View>
  );
};

export default RewardView;
