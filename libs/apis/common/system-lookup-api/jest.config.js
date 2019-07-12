module.exports = {
  name: 'apis-common-system-lookup-api',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/apis/common/system-lookup-api',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
