import each from 'aum-each';

export default function (configs) {
  each(configs, function (config) {
    config();
  });
}

