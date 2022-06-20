import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import Button from '../../components/atoms/Button';
import TextField from '../../components/atoms/TextField';
import Wrapper from '../../components/layouts/Wrapper';
import AdminManagement from '../../services/admin-management';
import { ForgetPasswordPayload } from '../../services/admin-management/types';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const getNotificationWhenEmailIsEmpty = (lang: string) => {
    switch (lang) {
      case 'id':
        return 'Mohon masukkan alamat email atau username.';
      default:
        return 'Please enter your email address or username.';
    }
  };

  const getModalMessage = (encryptedEmail: string, lang: string) => {
    switch (lang) {
      case 'id':
        return {
          title: 'Berhasil mengirim email',
          text: `Silahkan cek email Anda ${encryptedEmail}`,
        };
      default:
        return {
          title: 'Successfully sent email',
          text: `Please check your email ${encryptedEmail}`,
        };
    }
  };

  const handleSubmit = async (): Promise<void> => {
    const lang = navigator.language;
    if (email === '') {
      toast.error(getNotificationWhenEmailIsEmpty(lang));
      return;
    }

    const forgetPasswordPayload: ForgetPasswordPayload = { username: email };
    const res = await AdminManagement.forgetPassword(forgetPasswordPayload);

    if (res.error) {
      toast.error(res.message);
    } else {
      const modalMessage = getModalMessage(res.data.email, lang);
      Swal.fire({
        ...modalMessage,
        position: 'center',
        icon: 'success',
        showConfirmButton: true,
      });
    }

    setEmail('');
  };

  return (
    <>
      <Head>
        <title>Lupa Password - Digital Community Bank</title>
      </Head>
      <Wrapper>
        <div className="kc-forget-password--wrapper">
          <div className="kc-forget-password--content">
            <h2 className="kc-headline5">Lupa Password</h2>
            <p className="kc-forget-password--desc kc-body2">
              Masukkan email atau username Anda yang sudah terdaftar.
              Kami akan mengirim langkah untuk verifikasi ulang.
            </p>
            <div className="kc-input">
              <TextField
                _size="large"
                placeholder="Username atau Email"
                type="text"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <Button label="Kirim" size="long" onClick={handleSubmit} />
            <div className="kc-forget-password--caption">
              <p className="kc-caption">
                Kembali ke halaman login -
                <Link href="/"> Klik disini</Link>
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
