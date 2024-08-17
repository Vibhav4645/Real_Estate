import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAMFBMVEXk5ueutLeqsbTN0dLn6erIzM7b3t/Cxsm3vL/Q1NW8wcPf4eLX2tynrrGxt7rT1tjZMbmfAAADeUlEQVR4nO2b23LjIAxAAcuAjcH//7cLXrfdtE6CkBF0lvPUmb6cEZa4SBFiMBgMBoPBYDAYDAaDwf8DtBZ4CkS03rbNufhXa5vvgNDTKtUHwey6o1jGyM022skvlFfr7DpRhC3ayR9E4bUHRdhW/9PuI45GN1YEMFfR+1KUU1ND2MIrvUPRNlxnWN7YHYZha2Y4Z/glGi0zmHfL+4FfWhjCnOsXaWCI8pN+5zaE/Wn1uyQwF0RwAeUnpWX1E2LFLHBCGc4QwoT1i4as5RD3Af6FcZHzK+BDCBc2wa1ALxK4/MoCGEPItuWV+cWvkEcQt4c8wLOfgC31U4bFrzBFEsFxCJavsPQbg6AozOGEmhk+QvQx4V848tiVBzCGkEFwKdmHPwV1dT9KjkTB+pUQ0CfBB+rvduVl+ohg/WMrUJJ4CCZBip9Ua++CY4l/QRYTzgqSpQ72vpOIhSRYfy8WmnRY6P08GDhuTb2fqLu/k1BudZbjVtf9vbj/l4Xu32bKX7fYmhFbYSlk0vsFL6zdv1GXvfLztnJs332SgiMDd6cJ26uT7MMLvXc7++8XozrurUY/cmPYJH6JrHLYcuqj+7mZ/iePkqLuenbrVLyefgtdTL+JtM7bbL3vdn5QJEWhlzV8TmBKs7iOJjBPAMBtiR5nWI8R20daG50cIk5v02xWe16YrV3NPO3aufP/7eTimiaxlBMPM7ZpHth7GaJoGgduNJ0n9tmG8M3sR62RIawTez6nyFnlc08zygezO7ZAAmhzOZj80lEFs3AognBTeLmqryRN7fn0uGcYSXgCVmpdqipez5yjFGWYKsnFrLWU9/Mvx1Alq5+cWQoVb88XcM9PfWWK975Ww/L2aI9WNPetM+BfYrK46zKVNbFfwk1BJLY3XxrecOMDV2d5T0PyszXo27PjmyLtWgp7VbvDkNK+g71u+A58uSGlK4egOIYs8Uv4sudrcDx6sjRTHGn+BGlY8EJMHMPDgq7YtOkTNArbCGVK4H8MsYnC+AGeoCZqSnpxVHCLzO+HqjXMGXKC6ObpBnqYELYJIGZuqo1fdscRSAN4FDITmTYESiKvFmrSGC2FvJMhTK38pFqzIljvmvmWvN88tfsE80Zc+Q7SF4I5tZo0REsVzDl0NauCiYzfIoDxqiEZgvvUkPn9Cl/1BRnJERwMBoM7+QNupTG6vVA5GwAAAABJRU5ErkJggg=="
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
