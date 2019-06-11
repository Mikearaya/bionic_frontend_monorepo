module.exports = {
  name: 'components-data-grid',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/components/data-grid',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
