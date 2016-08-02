use OmniAuth::Builder do
  provider :facebook, env['APP_ID'], env['APP_SECRET']
end
