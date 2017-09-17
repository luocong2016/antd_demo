/**
 * Created by Lutz on 2017/9/17 0017.
 */
import React from 'react';
import { Modal } from 'antd';

function info(title, content) {
  Modal.info({
    title,
    content,
    onOk() {},
    onCancel() {},
  });
}

function success(title, content) {
  Modal.success({
    title,
    content,
    onOk() {},
    onCancel() {},
  });
}

function error(title, content) {
  Modal.error({
    title,
    content,
    onOk() {},
    onCancel() {},
  });
}

function warning(title, content) {
  Modal.warning({
    title,
    content,
    onOk() {},
    onCancel() {},
  });
}

export default {
  info,
  success,
  error,
  warning,
};
