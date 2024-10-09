import { SecurityFeaturesImages } from '../../text-mocks/playgrounds-security-section';
import { securityFeatures } from '../../text-mocks/playgrounds-security-section';

const SecuritySection = () => {
  return (
    <div className="security-section">
      <div className="security-inspection">
        <h2 className="inspection-tittle">Inspections Passed:</h2>
        <ul className="ispection-list">
          {securityFeatures.map(sFeature => {
            return (
              <li className="ispection-list-li" key={sFeature.text}>
                <img
                  className="ispection-list-li-image"
                  src={SecurityFeaturesImages.arrowImage}
                  alt="arrow"
                />
                <span className="ispection-list-li-text">{sFeature.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="security-cert">
        <h2 className="security-cert-heading">Security Certificates:</h2>
        <ul className="cert-list">
          <li className="cert-list-li">
            <img src={SecurityFeaturesImages.securityOne} alt="serti-image" />
          </li>
          <li className="cert-list-li">
            <img src={SecurityFeaturesImages.securityTwo} alt="serti-image" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SecuritySection;
