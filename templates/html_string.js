export default function getHtmlString({ image, name, email, subject, message }) {
    const htmlString = `<table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
  <tr>
      <td align="center" style="padding:0;">
          <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
              <tr>
                  <td style="padding:36px 30px 42px 30px;">
                      <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                      <p style="margin:0 0 25px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><img
                                                      src="${image}" alt="" width="200"
                                                      style="height:auto;display:block;" /></p>
                          <tr>
                              <td style="padding:0 0 36px 0;color:#153643;">
                                  <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">From: ${name}</h1>
                                  <hr>
                                  <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Email: ${email}</p>
                                  <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Subject: ${subject}</p>
                              </td>
                          </tr>
                          <tr>
                              <td style="padding:0;">
                                  <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                      <tr>
                                          <td style="width:260px;padding:0;vertical-align:top;color:#153643;background-color:#eeeeee;padding:1rem;border-radius:0.25rem;">
                                              ${message}
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
      </td>
  </tr>
</table>`
    return htmlString;
}